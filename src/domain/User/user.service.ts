import {apiAdapter} from '@api';
import {Page} from '@types';

import {userApiFactory} from './user-api';
import {userAdapter} from './user.adapter';
import {IUser, IUserAPI} from './user.contract';

export class UserService implements IUser {
  constructor(private readonly userApi: IUserAPI) {}

  async searchUser(search: string): Promise<Page<IUser.Model>> {
    const userAPIs = await this.userApi.getList(search);
    return apiAdapter.toPageModel(userAPIs, userAdapter.toUser);
  }

  async getById(userId: number): Promise<IUser.Model> {
    const userAPI = await this.userApi.getById(userId.toString());
    return userAdapter.toUser(userAPI);
  }
}

export function userServiceFactory(): IUser {
  return new UserService(userApiFactory);
}
