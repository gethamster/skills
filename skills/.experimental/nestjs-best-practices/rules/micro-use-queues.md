---
title: Use Message Queues for Background Jobs
impact: MEDIUM-HIGH
impactDescription: Queues enable reliable background processing with retry logic and distributed workload
tags:

- microservices
- queues
- bullmq
- background-jobs

---

# Use Message Queues for Background Jobs

Use `@nestjs/bullmq` for background job processing. Queues decouple long-running tasks from HTTP requests, enable retry logic, and distribute workload across workers. Use them for AI orchestration, file processing, notifications, and any task that shouldn't block user requests.

## Anti-Pattern: Long-Running Tasks in HTTP Handlers

```typescript
// ❌ WRONG: Blocking the HTTP request for a long-running operation
@Controller('plans')
export class PlansController {
  @Post()
  async generate(@Body() dto: GeneratePlanDto): Promise<Plan> {
    const brief = await this.briefsService.fetch(dto.briefId);
    const plan = await this.aiService.generatePlan(brief);   // Minutes!
    const tasks = await this.taskService.createBulk(plan);   // More time!
    return { plan, tasks };  // Client times out
  }
}

// ❌ WRONG: setInterval for scheduled tasks
setInterval(async () => {
  await cleanupOldRecords();
}, 60000);  // No error handling, memory leaks, no visibility
```

## Correct Pattern: BullMQ with Redis

### Queue Configuration

Configure BullMQ in the root module with Redis connection from ConfigService:

```typescript
// app.module.ts
@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        connection: getRedisConfig(configService),
      }),
      inject: [ConfigService],
    }),
    BullMQModule,  // Feature module that registers queues
  ],
})
export class AppModule {}
```

### Producer: Add Jobs to Queue

Return immediately to the client, process in background:

```typescript
@Injectable()
export class PlanGenerationService {
  constructor(
    @InjectQueue('orchestration-flow') private readonly queue: Queue,
  ) {}

  async requestPlanGeneration(briefId: string, accountId: string) {
    const job = await this.queue.add(
      'generate-plan',
      { briefId, accountId },
      {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        // Deterministic job ID prevents duplicate processing
        jobId: `plan-${briefId}`,
      },
    );

    return { jobId: job.id };
  }
}
```

### Consumer: Process Jobs with WorkerHost

Extend `WorkerHost` for the processor class. Use `@Processor()` with concurrency and stalled job settings:

```typescript
@Processor('orchestration-flow', {
  concurrency: 5,
  maxStalledCount: 2,
  stalledInterval: 30000,
})
export class OrchestrationFlowConsumer extends WorkerHost {
  private readonly logger = new Logger(OrchestrationFlowConsumer.name);

  constructor(
    private readonly planService: PlanGenerationService,
    // ✅ Use AIUserSessionManager — NOT SupabaseService
    // SupabaseService is REQUEST-scoped and has no request context in queue processors.
    // AIUserSessionManager authenticates as the team's AI agent (subject to RLS).
    private readonly aiUserSessionManager: AiUserSessionManager,
  ) {
    super();
  }

  async process(job: Job<OrchestrationFlowJob>): Promise<void> {
    const ctx = { operation: 'processOrchestrationFlow', jobId: job.id };
    this.logger.log(ctx, 'Processing orchestration flow job');

    try {
      // Get RLS-enforced client for this team's AI agent
      const client = await this.aiUserSessionManager
        .getTeamAiUserSessionClient(job.data.accountId);

      await this.planService.execute(job.data, client);
      this.logger.log(ctx, 'Orchestration flow job completed');
    } catch (error) {
      this.logger.error({ ...ctx, error }, 'Orchestration flow job failed');
      throw error;  // BullMQ retries based on job options
    }
  }

  @OnWorkerEvent('active')
  onActive(job: Job) {
    this.logger.debug({ jobId: job.id }, 'Job started processing');
  }

  @OnWorkerEvent('completed')
  onCompleted(job: Job) {
    this.logger.log({ jobId: job.id }, 'Job completed');
  }

  @OnWorkerEvent('failed')
  onFailed(job: Job, error: Error) {
    this.logger.error({ jobId: job.id, error: error.message }, 'Job failed');
  }
}
```

### Scheduled Jobs

Use repeatable jobs with deterministic IDs to prevent duplicates:

```typescript
@Injectable()
export class ScheduledJobsService implements OnModuleInit {
  constructor(@InjectQueue('maintenance') private queue: Queue) {}

  async onModuleInit(): Promise<void> {
    await this.queue.add(
      'cleanup',
      {},
      {
        repeat: { cron: '0 0 * * *' },
        jobId: 'daily-cleanup',  // Prevents duplicate schedules
      },
    );
  }
}
```

## Key Guidelines

1. **Return immediately from HTTP handlers** — add a job and return the job ID for status polling
2. **Use `AIUserSessionManager` for database access** — NOT `SupabaseService` (which is REQUEST-scoped and has no request context in queue processors). The AI user session provides an RLS-enforced client. See `security-supabase-rls` rule for details
3. **Use deterministic job IDs** — prevents duplicate processing when the same request is retried
4. **Configure retry with exponential backoff** — `{ attempts: 3, backoff: { type: 'exponential', delay: 5000 } }`
5. **Extend `WorkerHost`** — not the deprecated `@Process()` decorator pattern
6. **Use `@OnWorkerEvent()`** — not the deprecated `@OnQueueActive/Completed/Failed` decorators
7. **Log with structured context** — include job ID, operation name, and relevant data in every log
8. **Jobs must be idempotent** — safe to retry without side effects if partially completed

Reference: [NestJS Queues](https://docs.nestjs.com/techniques/queues)