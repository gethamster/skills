# Repository Pattern for Vault Credentials

TypeScript repository patterns for vault operations with proper access control.

## Framework-Agnostic Pattern

For use in `@kit/repositories` or standalone utilities:

```typescript
// packages/repositories/src/[feature]-credentials.repository.ts
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@kit/supabase/database';

type Client = SupabaseClient<Database>;

export interface Logger {
  debug(message: string, context?: Record<string, unknown>): void;
  warn(message: string, context?: Record<string, unknown>): void;
  error(message: string, context?: Record<string, unknown>): void;
}

const noOpLogger: Logger = {
  debug: () => {},
  warn: () => {},
  error: () => {},
};

/**
 * Repository for managing [feature] credentials via Supabase Vault
 *
 * SECURITY: All admin client operations require explicit auth validation
 */
export class FeatureCredentialsRepository {
  constructor(
    private readonly client: Client,
    private readonly adminClient: Client,
    private readonly logger: Logger = noOpLogger,
  ) {}

  /**
   * Verify user has access to the specified account.
   * Uses the RLS-enforced client to check membership.
   */
  private async verifyAccountAccess(accountId: string): Promise<boolean> {
    const { data, error } = await this.client.rpc('has_role_on_account', {
      account_id: accountId,
    });

    if (error) {
      this.logger.error('Account access verification failed', { accountId, error: error.message });
      return false;
    }

    return !!data;
  }

  /**
   * Store credentials in Vault and return secret_id
   * Returns null on failure (graceful degradation)
   */
  async storeCredentials(
    credentialData: string,
    userId: string,
    accountId: string,
  ): Promise<string | null> {
    const hasAccess = await this.verifyAccountAccess(accountId);
    if (!hasAccess) {
      this.logger.warn('Vault access blocked - unauthorized', { operation: 'store', userId, accountId });
      return null;
    }

    const { data, error } = await this.adminClient.rpc('store_[feature]_credentials', {
      p_user_id: userId,
      p_account_id: accountId,
      p_credential_data: credentialData,
    });

    if (error) {
      this.logger.error('Failed to store credentials', { error, userId, accountId });
      return null;
    }

    return data;
  }

  /**
   * Retrieve decrypted credentials from Vault
   * Returns null on failure (graceful degradation)
   */
  async getCredentials(
    secretId: string,
    accountId: string,
  ): Promise<string | null> {
    const hasAccess = await this.verifyAccountAccess(accountId);
    if (!hasAccess) {
      this.logger.warn('Vault access blocked - unauthorized', { operation: 'get', secretId, accountId });
      return null;
    }

    const { data, error } = await this.adminClient.rpc('get_[feature]_credentials', {
      p_secret_id: secretId,
    });

    if (error) {
      this.logger.error('Failed to decrypt credentials', { error, secretId, accountId });
      return null;
    }

    return data;
  }

  /**
   * Delete credentials from Vault
   * Returns false on failure (graceful degradation)
   */
  async deleteCredentials(
    secretId: string,
    accountId: string,
  ): Promise<boolean> {
    const hasAccess = await this.verifyAccountAccess(accountId);
    if (!hasAccess) {
      this.logger.warn('Vault access blocked - unauthorized', { operation: 'delete', secretId, accountId });
      return false;
    }

    const { data, error } = await this.adminClient.rpc('delete_[feature]_credentials', {
      p_secret_id: secretId,
    });

    if (error) {
      this.logger.error('Failed to delete credentials', { error, secretId, accountId });
      return false;
    }

    return data ?? false;
  }
}

// Factory function for easy instantiation
export function createFeatureCredentialsRepository(
  client: Client,
  adminClient: Client,
  logger?: Logger,
) {
  return new FeatureCredentialsRepository(client, adminClient, logger);
}
```

## NestJS Integration (apps/ai)

Wrap the repository with NestJS decorators:

```typescript
// modules/[feature]/repositories/[feature]-credentials.repository.ts
import { Injectable, Logger } from '@nestjs/common';
import { SupabaseService } from '../../supabase/supabase.service';

@Injectable()
export class FeatureCredentialsRepository {
  private readonly logger = new Logger(FeatureCredentialsRepository.name);

  constructor(private readonly supabaseService: SupabaseService) {}

  private async verifyAccountAccess(accountId: string): Promise<boolean> {
    const client = this.supabaseService.getClient();
    const { data, error } = await client.rpc('has_role_on_account', {
      account_id: accountId,
    });
    if (error) {
      this.logger.error('Access verification failed', { accountId, error: error.message });
      return false;
    }
    return !!data;
  }

  async storeCredentials(credentialData: string, userId: string, accountId: string): Promise<string | null> {
    if (!(await this.verifyAccountAccess(accountId))) return null;

    const adminClient = this.supabaseService.getAdminClient();
    const { data, error } = await adminClient.rpc('store_[feature]_credentials', {
      p_user_id: userId,
      p_account_id: accountId,
      p_credential_data: credentialData,
    });

    if (error) {
      this.logger.error('Failed to store credentials', { error, userId, accountId });
      return null;
    }
    return data;
  }

  // ... getCredentials, deleteCredentials follow same pattern
}

// Module registration
@Module({
  imports: [SupabaseModule],
  providers: [FeatureCredentialsRepository],
  exports: [FeatureCredentialsRepository],
})
export class FeatureModule {}
```

## Next.js Integration (apps/web)

Use directly in server actions or create a utility:

```typescript
// lib/vault/[feature]-credentials.ts
import { getSupabaseServerClient, getSupabaseServerAdminClient } from '@kit/supabase/server-client';
import { getLogger } from '@kit/shared/logger';

const logger = getLogger().withNamespace('[feature].credentials');

export async function storeFeatureCredentials(
  credentialData: string,
  userId: string,
  accountId: string,
): Promise<string | null> {
  const client = getSupabaseServerClient();
  const adminClient = getSupabaseServerAdminClient();

  // Verify access via RLS
  const { data: hasAccess } = await client.rpc('has_role_on_account', { account_id: accountId });
  if (!hasAccess) {
    logger.warn('Access denied', { userId, accountId });
    return null;
  }

  const { data, error } = await adminClient.rpc('store_[feature]_credentials', {
    p_user_id: userId,
    p_account_id: accountId,
    p_credential_data: credentialData,
  });

  if (error) {
    logger.error('Failed to store', { error });
    return null;
  }
  return data;
}

// Usage in server action:
// app/home/[account]/_lib/[feature]/actions.ts
'use server';
import { storeFeatureCredentials } from '~/lib/vault/[feature]-credentials';

export const setupFeature = enhanceAction(async (data, user) => {
  const secretId = await storeFeatureCredentials(data.credentials, user.id, data.accountId);
  if (!secretId) throw new Error('Failed to store credentials');
  // ... continue with feature setup
}, { schema: setupSchema });
```

## Key Patterns

1. **Access verification first**: Always verify via RLS client before acquiring admin client
2. **Graceful degradation**: Return `null`/`false` on failures, don't throw
3. **Client separation**: RLS client for access checks, admin client for vault operations
4. **Structured logging**: Include operation context for debugging
