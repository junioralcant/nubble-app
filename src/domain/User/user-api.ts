import {PageAPI, api} from '@api';

import {IUserAPI} from './user.contract';

const PATH = 'users';

export class UserAPI implements IUserAPI {
  async getList(search: string): Promise<PageAPI<IUserAPI.Model>> {
    const response = await api.get<PageAPI<IUserAPI.Model>>(`${PATH}`, {
      params: {
        search,
      },
    });

    return response.data;
  }

  async getById(userId: string): Promise<IUserAPI.Model> {
    await new Promise(resolve => setTimeout(() => resolve(''), 2000));
    const response = await api.get<IUserAPI.Model>(`${PATH}/${userId}`);
    return response.data;
  }
}

export const userApiFactory = new UserAPI();
