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
  remove(postCommentId: number): Promise<IPostComment.Message>;
  isAllowToDelete(
    postComment: IPostComment.Model,
    userId: number,
    postAuthorId: number,
  ): boolean;
}

export namespace IPostComment {
  export type Model = PostCommentModel;
  export type Message = {message: string};
}

export interface IPostCommentAPI {
  getList(
    post_id: number,
    pageParams?: PageParams,
  ): Promise<IPostCommentAPI.ResponseAPI>;

  create(post_id: number, message: string): Promise<IPostCommentAPI.Model>;

  remove(postCommentId: number): Promise<IPostCommentAPI.Message>;
}

export namespace IPostCommentAPI {
  export type ResponseAPI = PageAPI<PostCommentAPI>;
  export type Model = PostCommentAPI;
  export type Message = {message: string};
}
