import { Client } from '@notionhq/client';
import type { ClientOptions } from '@notionhq/client/build/src/Client';

type NotionClientOptions = Omit<ClientOptions, 'auth'>;

const createNotionClient = (secret: string, options: NotionClientOptions = {}) => new Client({ auth: secret, ...options });

class NotionManager {
  private _secret: string;
  private _activeDb: string | null;
  private _client: Client;

  constructor (secret: string, options: NotionClientOptions & { db?: string, dbs?: string[] } = {}) {
    this._secret = secret;
    this._client = createNotionClient(secret, options);
    this._activeDb = options.db ?? null;
  }

  get client() {
    return this._client;
  }

}

export default NotionManager;
