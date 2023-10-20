import {api} from '@api';

import {UserAPI} from '../User/user-api.types';

import {FieldIsAvailableAPIModel} from './auth-api.types';
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

  async signUp(data: IAuthAPI.ModelSignUp): Promise<UserAPI> {
    const response = await api.post<UserAPI>('register', data);
    return response.data;
  }

  updateToken(token: string): void {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  removeToken(): void {
    api.defaults.headers.common.Authorization = null;
  }

  async isEmailAvailable(
    email: string,
  ): Promise<IAuthAPI.ModelFieldIsAvailable> {
    const {data} = await api.get<IAuthAPI.ModelFieldIsAvailable>(
      'validate-email',
      {
        params: {email},
      },
    );

    return data;
  }

  async isUserNameAvailable(
    userName: string,
  ): Promise<FieldIsAvailableAPIModel> {
    const {data} = await api.get<IAuthAPI.ModelFieldIsAvailable>(
      'validate-username',
      {
        params: {userName},
      },
    );

    return data;
  }
}

export function authApiFactory(): IAuthAPI {
  return new AuthAPI();
}
