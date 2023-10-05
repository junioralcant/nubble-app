import {asyncStorageFactory} from './implementations/async-storage';

export interface IStorage {
  getItem<T = unknown>(key: string): Promise<T | null>;
  setItem<T>(key: string, value: T): Promise<void>;
  removeItem(key: string): Promise<void>;
}

export let storage: IStorage = asyncStorageFactory();
