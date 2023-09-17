import {PageAPI} from '@api';
import {Page} from '@types';

import {PageParams} from '../Post/post.contracts';

import {PostCommentAPI} from './post-comment-api.types';
import {PostCommentModel} from './post-comment.model';

export interface IPostComment {
  getList(
    postId: number,
    pageParams?: PageParams,
  ): Promise<Page<IPostComment.Model>>;
  create(postId: number, message: string): Promise<IPostComment.Model>;
}

export namespace IPostComment {
  export type Model = PostCommentModel;
}

export interface IPostCommentAPI {
  getList(
    post_id: number,
    pageParams?: PageParams,
  ): Promise<IPostCommentAPI.ResponseAPI>;

  create(post_id: number, message: string): Promise<IPostCommentAPI.Model>;
}

export namespace IPostCommentAPI {
  export type ResponseAPI = PageAPI<PostCommentAPI>;
  export type Model = PostCommentAPI;
}
