import {api} from '@api';

import {UserAPI} from '../User/user-api.types';

import {FieldIsAvailableAPIModel} from './auth-api.types';
import {IAuthAPI} from './auth.contracts';

export class AuthAPI implements IAuthAPI {
  async signIn(email: string, password: string): Promise<IAuthAPI.Model> {
    const {data} = await api.post<IAuthAPI.Model>('auth/login', {
      email,
      password,
    });
    console.log(data);

    return data;
  }

  async signOut(): Promise<string> {
    const {data} = await api.get<string>('auth/profile/logout');
    return data;
  }

  async signUp(data: IAuthAPI.ModelSignUp): Promise<UserAPI> {
    const response = await api.post<UserAPI>('auth/register', data);
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
      'auth/validate-email',
      {
        params: {email},
      },
    );

    return data;
  }

  async isUserNameAvailable(
    username: string,
  ): Promise<FieldIsAvailableAPIModel> {
    const {data} = await api.get<IAuthAPI.ModelFieldIsAvailable>(
      'au th/validate-username',
      {
        params: {username},
      },
    );

    return data;
  }

  async forgotPassword(
    params: IAuthAPI.ForgotPasswordParams,
  ): Promise<{message: string}> {
    const {data} = await api.post<{message: string}>('forgot-password', params);
    return data;
  }

  async refreshToken(token: string): Promise<IAuthAPI.Model> {
    const {data} = await api.post<IAuthAPI.Model>('auth/refresh-token', {
      refreshToken: token,
    });

    return data;
  }
}

export function authApiFactory(): IAuthAPI {
  return new AuthAPI();
}
