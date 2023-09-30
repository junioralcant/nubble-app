import {AuthCredentialsAPI} from './auth-api.types';
import {AuthCredentialsModel} from './auth.model';

export interface IAuth {
  signIn(email: string, password: string): Promise<IAuth.Model>;
  signOut(): Promise<string>;
}

export namespace IAuth {
  export type Model = AuthCredentialsModel;
}

export interface IAuthAPI {
  signIn(email: string, password: string): Promise<IAuthAPI.Model>;
  signOut(): Promise<string>;
}

export namespace IAuthAPI {
  export type Model = AuthCredentialsAPI;
}
