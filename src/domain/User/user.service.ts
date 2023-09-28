import {userApiFactory} from './user-api';
import {userAdapter} from './user.adapter';
import {IUser, IUserAPI} from './user.contract';

export class UserService implements IUser {
  constructor(private readonly userApi: IUserAPI) {}

  async getById(userId: number): Promise<IUser.Model> {
    const userAPI = await this.userApi.getById(userId.toString());
    return userAdapter.toUser(userAPI);
  }
}

export function userServiceFactory(): IUser {
  return new UserService(userApiFactory);
}
