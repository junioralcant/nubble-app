import {PageAPI} from '@api';

import {UserAPI} from './user-api.types';
import {UserModel} from './user.model';

export interface IUser {
  getById(userId: number): Promise<IUser.Model>;
}

export namespace IUser {
  export type Model = UserModel;
}

export interface IUserAPI {
  getById(userId: string): Promise<IUserAPI.Model>;
  getList(search: string): Promise<PageAPI<IUserAPI.Model>>;
}

export namespace IUserAPI {
  export type Model = UserAPI;
}
