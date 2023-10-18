import {AuthCredentialsModel} from '@domain';

import {storage} from '../storage';

const AUTH_KEY = '@Auth';

async function set(ac: AuthCredentialsModel): Promise<void> {
  await storage.setItem(AUTH_KEY, ac);
}

async function get(): Promise<AuthCredentialsModel | null> {
  const ac = await storage.getItem<AuthCredentialsModel>(AUTH_KEY);
  return ac;
}

async function remove(): Promise<void> {
  await storage.removeItem(AUTH_KEY);
}

export const authCredentialsStorage = {set, get, remove};
