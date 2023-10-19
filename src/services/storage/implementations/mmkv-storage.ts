import {MMKV} from 'react-native-mmkv';

import {IStorage} from '../storage.type';

export class MMKVStorage implements IStorage {
  private MMKVInstance = new MMKV();

  async getItem<T>(key: string): Promise<T | null> {
    const item = this.MMKVInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    this.MMKVInstance.set(key, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    this.MMKVInstance.delete(key);
  }
}

export function mmkvStorageFactory(): IStorage {
  return new MMKVStorage();
}
