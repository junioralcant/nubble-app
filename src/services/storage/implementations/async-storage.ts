import Storage from '@react-native-async-storage/async-storage';

import {IStorage} from '../storage.type';

export class AsyncStorage implements IStorage {
  async getItem<T>(key: string): Promise<T | null> {
    const item = await Storage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }

  async setItem<T>(key: string, value: T): Promise<void> {
    await Storage.setItem(key, JSON.stringify(value));
  }

  async removeItem(key: string): Promise<void> {
    await Storage.removeItem(key);
  }
}

export function asyncStorageFactory(): IStorage {
  return new AsyncStorage();
}
