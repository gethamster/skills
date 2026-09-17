---
name: hamster-ai-tools
description: "Design, implement, review, and repair model-facing AI SDK tools in apps/ai, including Zod input schemas, field descriptions, JSON Schema conversion, validation-error loops, tool-call repair hooks, and contract tests. Use whenever adding or changing an agent tool, diagnosing tool input validation failures, or reviewing whether a tool gives the model enough guidance."
---

# Hamster AI Tools

Treat an agent tool's generated JSON Schema as its prompt contract. Make the valid call shape obvious before relying on validation errors or repair.

## Design the input contract

1. Put every machine-readable constraint in Zod:
   - Use `.min()`, `.max()`, `.length()`, `.int()`, `.positive()`, enums, `z.uuid()`, optional/default fields, and discriminated unions as appropriate.
   - Prefer native Zod constraints over prose because the AI SDK converts them to JSON Schema keywords the model can use.
   - Give model-correctable bounds an actionable Zod error message. State how to rewrite the value for a valid retry (for example, synthesize repeated evidence or split independent operations), not only the numeric limit. Keep the native constraint so the generated JSON Schema still carries `minLength`, `maxLength`, or the equivalent keyword.
   - Reuse canonical shared schemas and constants; do not duplicate enum members or validation limits.
2. Use field-local `.describe()` text only for semantics Zod cannot express:
   - Explain what the value means, when to choose it, where to obtain it, cross-field relationships, and side effects.
   - Do not repeat lengths, ranges, enum members, required/optional status, UUID format, or other constraints already present in the generated schema.
   - Keep descriptions concise and actionable. Avoid implementation details and generic filler.
3. Use refinements only for constraints that native Zod cannot represent:
   - Attach the issue to the relevant `path` and write an actionable message that states how to correct the input.
   - Use `superRefine` for cross-field invariants. Describe the relationship on the involved fields because refinements may not survive JSON Schema conversion.
   - Do not depend on a thrown validation error as the model's first source of guidance.
4. Treat transforms as execution behavior, not model guidance. Confirm that the input-side constraints and descriptions still appear after conversion.

## Inspect what the model receives

Render the actual tool schema through the same AI SDK conversion used in production:

```typescript
import { asSchema } from '@ai-sdk/provider-utils';

const jsonSchema = asSchema(tool.inputSchema).jsonSchema;
```

Inspect `properties`, `required`, enums, formats, bounds, descriptions, and union structure. Do not approve a schema by reading only its Zod source.

Add a contract test for every new or materially changed model-facing schema. Assert both layers separately:

- Structural guidance is represented by JSON Schema keywords such as `minLength`, `maxLength`, `enum`, and `format`.
- Descriptions contain only the semantic guidance that cannot be encoded structurally.
- Required fields and union branches match the tool's execution contract.
- Correctable validation failures expose the intended retry guidance through the Zod issue message. Assert the issue `code`, `path`, and message so a generic default cannot silently return.

Follow the repository's `test-driven-development` skill: change the contract test first, observe the intended failure, then change the schema.

## Handle tool-call repair

- Use the AI SDK's `experimental_repairToolCall` hook for model-generated calls that fail parsing or validation.
- Keep orchestration wiring thin. Put reusable repair dispatch in the orchestration repair module and tool-specific repair beside the tool.
- Parse with the AI SDK/provider utility used by the codebase; do not add bespoke `JSON.parse` wrappers.
- Repair only lossless structural defects deterministically. Revalidate the complete repaired payload against the canonical Zod schema.
- Never repair semantic text by truncating, slicing, dropping fields, or otherwise discarding context to satisfy a bound. Return no repair so the multi-step model can retry from the full conversation context. If a dedicated model-based repair is justified, require structured output against the canonical schema and instruct it to preserve every material fact.
- Return no repair for ambiguous, missing, authorization-sensitive, or semantically invalid input. Never invent IDs, enum choices, or user intent.
- Bound repair to one attempt and preserve observability. Repair is a safety net, not a substitute for a strong schema.

## Review checklist

- Inspect the generated JSON Schema, not just Zod.
- Encode structure in Zod and semantics in `.describe()`.
- Avoid duplicated constraints in prose.
- Make refinement errors field-specific and actionable.
- Test the model-facing contract and execution validation.
- Use official AI SDK repair and parsing APIs.
- Keep tool-specific logic out of the core orchestrator.
- Compare detail quality with adjacent tools before declaring the contract complete.

## Key files

| File | Purpose |
| --- | --- |
| `apps/ai/src/modules/ai-agent/tools/` | Agent tool implementations and specs |
| `apps/ai/src/modules/ai-agent/orchestration/core-tool-call-repair.ts` | Shared repair dispatch for core agents |
| `apps/ai/src/modules/ai-agent/agents/core-agent/core-orchestrator.agent.ts` | Thin AI SDK repair-hook wiring |
| `packages/shared/src/schemas/` | Canonical shared Zod schemas and limits |
