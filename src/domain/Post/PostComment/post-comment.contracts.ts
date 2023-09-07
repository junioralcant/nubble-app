import {PageAPI} from '@api';
import {Page} from '@types';

import {PostCommentAPI} from './post-comment-api.types';
import {PostCommentModel} from './post-comment.model';

export interface IPostComment {
  getList(
    post_id: number,
    pageParams?: PageParams,
  ): Promise<IPostComment.Model>;
}

export namespace IPostComment {
  export type Model = Page<PostCommentModel>;
}

export interface IPostCommentAPI {
  getList(
    post_id: number,
    pageParams?: PageParams,
  ): Promise<IPostCommentAPI.ResponseAPI>;
}

export namespace IPostCommentAPI {
  export type ResponseAPI = PageAPI<PostCommentAPI>;
}

export type PageParams = {
  page?: number;
  perPage?: number;
};
