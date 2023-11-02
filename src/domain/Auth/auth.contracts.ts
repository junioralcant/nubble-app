import {UserAPI} from '../User/user-api.types';

import {
  AuthCredentialsAPI,
  FieldIsAvailableAPIModel,
  SignUpDataAPIModel,
} from './auth-api.types';
import {AuthCredentialsModel, SignUpDataModel} from './auth.model';

export interface IAuth {
  signIn(email: string, password: string): Promise<IAuth.Model>;
  signOut(): Promise<string>;
  signUp(signUpData: IAuth.ModelSignUpData): Promise<void>;
  updateToken(token: string): void;
  removeToken(): void;
  isEmailAvailable(email: string): Promise<boolean>;
  isUserNameAvailable(username: string): Promise<boolean>;
}

export namespace IAuth {
  export type Model = AuthCredentialsModel;
  export type ModelSignUpData = SignUpDataModel;
}

export interface IAuthAPI {
  signIn(email: string, password: string): Promise<IAuthAPI.Model>;
  signOut(): Promise<string>;
  signUp(data: IAuthAPI.ModelSignUp): Promise<UserAPI>;
  updateToken(token: string): void;
  removeToken(): void;
  isEmailAvailable(email: string): Promise<IAuthAPI.ModelFieldIsAvailable>;
  isUserNameAvailable(
    username: string,
  ): Promise<IAuthAPI.ModelFieldIsAvailable>;
}

export namespace IAuthAPI {
  export type Model = AuthCredentialsAPI;
  export type ModelSignUp = SignUpDataAPIModel;
  export type ModelFieldIsAvailable = FieldIsAvailableAPIModel;
}
