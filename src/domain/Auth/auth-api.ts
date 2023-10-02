import {api} from '@api';

import {IAuthAPI} from './auth.contracts';

export class AuthAPI implements IAuthAPI {
  async signIn(email: string, password: string): Promise<IAuthAPI.Model> {
    const {data} = await api.post<IAuthAPI.Model>('login', {
      email,
      password,
    });
    return data;
  }

  async signOut(): Promise<string> {
    const {data} = await api.get<string>('profile/logout');
    return data;
  }

  updateToken(token: string): void {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  removeToken(): void {
    api.defaults.headers.common.Authorization = null;
  }
}

export function authApiFactory(): IAuthAPI {
  return new AuthAPI();
}