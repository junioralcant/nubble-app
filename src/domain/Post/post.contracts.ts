import {PageAPI} from '@api';

import {PostModel} from './post.model';
import {PostAPI} from './postApi.types';

export interface IPostList {
  getList(): Promise<PostModel[]>;
}

export interface IPostListAPI {
  getList(): Promise<IPostListAPI.ResponseAPI>;
}

export namespace IPostListAPI {
  export type ResponseAPI = PageAPI<PostAPI>;
}
