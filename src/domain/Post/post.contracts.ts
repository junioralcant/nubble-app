import {PageAPI} from '@api';

import {PostModel} from './post.model';
import {PostAPI} from './postApi.types';

export interface IPostList {
  getList(params?: PageParams): Promise<PostModel[]>;
}

export interface IPostListAPI {
  getList(params?: PageParams): Promise<IPostListAPI.ResponseAPI>;
}

export namespace IPostListAPI {
  export type ResponseAPI = PageAPI<PostAPI>;
}

export type PageParams = {
  page?: number;
  perPage?: number;
};
