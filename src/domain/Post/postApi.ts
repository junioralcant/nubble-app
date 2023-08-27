import {api} from '@api';

import {IPostListAPI, PageParams} from './post.contracts';

export class PostListApi implements IPostListAPI {
  async getList(params?: PageParams): Promise<IPostListAPI.ResponseAPI> {
    const {data} = await api.get<IPostListAPI.ResponseAPI>('/user/post', {
      params,
    });

    return data;
  }
}
