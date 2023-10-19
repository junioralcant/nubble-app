export interface IStorage {
  getItem<T = unknown>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export let storage: IStorage;

export function initializeStorage(storageImpl: IStorage) {
  storage = storageImpl;
}
