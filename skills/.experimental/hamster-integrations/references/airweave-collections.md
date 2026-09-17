---
title: Airweave Collections
tags: airweave, collections, context
---

# Airweave Collection Management

## Overview

Each team account gets a dedicated Airweave collection. Collections are lazily created on first context connection.

## Key Files

| File | Purpose |
| --- | --- |
| `apps/ai/src/modules/context-connections/collection-creation.helper.ts` | Collection helper |
| `public.airweave_collections` | Database table |
| `get_or_create_airweave_collection(target_account_id)` | RPC function |

## Collection States

| Status | Meaning |
| --- | --- |
| `initializing` | DB record created, Airweave collection pending |
| `active` | Collection exists in both DB and Airweave |
| `failed` | Collection creation failed (will retry on next attempt) |

## Self-Healing Collections

The `getOrCreateCollection` helper verifies that "active" collections actually exist in Airweave:

```typescript
// collection-creation.helper.ts
async getOrCreateCollection(accountId: string): Promise<Collection> {
  // Try to get existing collection
  const { data: collection } = await this.supabase
    .from('airweave_collections')
    .select('*')
    .eq('account_id', accountId)
    .single();

  // If marked active, verify it exists in Airweave
  if (collection?.status === 'active') {
    try {
      await this.airweaveClient.collections.get(collection.collection_id);
      return collection;  // Exists, use it
    } catch (error) {
      // Doesn't exist - reset to 'initializing' and recreate
      // This handles cases where Airweave data was reset but DB wasn't
      await this.supabase
        .from('airweave_collections')
        .update({ status: 'initializing' })
        .eq('id', collection.id);
    }
  }

  // Create new collection in Airweave
  const airweaveCollection = await this.airweaveClient.collections.create({
    name: `Account ${accountId}`,
    readable_id: accountId,
  });

  // Update or create DB record
  await this.supabase
    .from('airweave_collections')
    .upsert({
      account_id: accountId,
      collection_id: airweaveCollection.id,
      status: 'active',
    });

  return airweaveCollection;
}
```

## Source Connection Authentication

When creating source connections, use the `access_token` format that Airweave expects:

```typescript
// CORRECT - matches Airweave's oauth_token authentication type
await this.airweaveClient.sources.create({
  collection_id: collectionId,
  short_name: 'slack',
  authentication: {
    access_token: tokenResponse.access_token,
  },
});

// WRONG - nested credentials not recognized
await this.airweaveClient.sources.create({
  collection_id: collectionId,
  short_name: 'slack',
  authentication: {
    credentials: { bot_token: tokenResponse.access_token }  // Wrong!
  },
});
```

## Authentication Types

| Type | Description | Usage |
| --- | --- | --- |
| `oauth_browser` | Airweave handles OAuth flow | Airweave UI |
| `oauth_token` | We provide pre-obtained access token | Hamster OAuth |
| `auth_provider` | Third-party auth provider | SSO |
| `oauth_byoc` | Bring your own credentials | Custom OAuth apps |

## Database Schema

```sql
CREATE TABLE public.airweave_collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id UUID REFERENCES public.accounts(id) ON DELETE CASCADE NOT NULL,
  collection_id TEXT NOT NULL,  -- Airweave collection ID
  status TEXT NOT NULL DEFAULT 'initializing',  -- 'initializing' | 'active' | 'failed'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(account_id)
);

-- RLS: Account members can read their collection
CREATE POLICY "team_read" ON public.airweave_collections FOR SELECT
  USING (public.has_role_on_account(account_id));
```

## RPC Function

```sql
CREATE OR REPLACE FUNCTION get_or_create_airweave_collection(target_account_id UUID)
RETURNS TABLE (
  id UUID,
  account_id UUID,
  collection_id TEXT,
  status TEXT
) AS $$
BEGIN
  -- Try to get existing
  RETURN QUERY
  SELECT ac.id, ac.account_id, ac.collection_id, ac.status
  FROM public.airweave_collections ac
  WHERE ac.account_id = target_account_id;

  -- If none found, insert initializing record
  IF NOT FOUND THEN
    RETURN QUERY
    INSERT INTO public.airweave_collections (account_id, status)
    VALUES (target_account_id, 'initializing')
    RETURNING id, account_id, collection_id, status;
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## Using Collections in Services

```typescript
@Injectable()
export class ContextConnectionService {
  constructor(
    private readonly collectionHelper: CollectionCreationHelper,
    private readonly airweaveClient: AirweaveClientService,
  ) {}

  async createSlackConnection(
    accountId: string,
    tokens: TokenResponse,
  ): Promise<SourceConnection> {
    // Get or create collection for this account
    const collection = await this.collectionHelper.getOrCreateCollection(accountId);

    // Create source in the collection
    return this.airweaveClient.sources.create({
      collection_id: collection.collection_id,
      short_name: 'slack',
      authentication: {
        access_token: tokens.access_token,
      },
    });
  }

  async listConnections(accountId: string): Promise<SourceConnection[]> {
    const collection = await this.collectionHelper.getOrCreateCollection(accountId);
    return this.airweaveClient.sources.list(collection.collection_id);
  }

  async deleteConnection(accountId: string, sourceId: string): Promise<void> {
    const collection = await this.collectionHelper.getOrCreateCollection(accountId);
    await this.airweaveClient.sources.delete(collection.collection_id, sourceId);
  }
}
```

## Troubleshooting

### Collection marked active but not in Airweave

The self-healing logic handles this:

1. Helper tries to get collection from Airweave
2. If not found, resets status to `initializing`
3. Creates new collection in Airweave
4. Updates DB record

### Source creation fails with auth error

Check authentication format:

```typescript
// Wrong
{ credentials: { token: '...' } }

// Correct
{ access_token: '...' }
```

### Collection creation hangs

1. Check Airweave API connectivity
2. Verify API credentials
3. Check rate limits