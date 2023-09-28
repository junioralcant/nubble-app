import {api} from '@api';

import {IUserAPI} from './user.contract';

const PATH = 'users';

export class UserAPI implements IUserAPI {
  async getById(userId: string): Promise<IUserAPI.Model> {
    const response = await api.get<IUserAPI.Model>(`${PATH}/${userId}`);
    return response.data;
  }
}

export const userApiFactory = new UserAPI();
