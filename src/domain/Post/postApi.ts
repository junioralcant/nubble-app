import {api} from '@api';

import {IPostListAPI} from './post.contracts';

export class PostListApi implements IPostListAPI {
  async getList(): Promise<IPostListAPI.ResponseAPI> {
    const {data} = await api.get<IPostListAPI.ResponseAPI>('/user/post');

    return data;
  }
}
