import {api} from '@api';

import {PageParams} from '../Post/post.contracts';

import {IPostCommentAPI} from './post-comment.contracts';

export const PATH_POST_COMMENT = '/user/post_comment';

export class PostCommentAPI implements IPostCommentAPI {
  async getList(
    post_id: number,
    pageParams?: PageParams | undefined,
  ): Promise<IPostCommentAPI.ResponseAPI> {
    const {data} = await api.get<IPostCommentAPI.ResponseAPI>(
      PATH_POST_COMMENT,
      {
        params: {
          post_id,
          ...pageParams,
        },
      },
    );

    return data;
  }

  async create(
    post_id: number,
    message: string,
  ): Promise<IPostCommentAPI.Model> {
    const {data} = await api.post<IPostCommentAPI.Model>(PATH_POST_COMMENT, {
      post_id,
      message,
    });

    return data;
  }

  async remove(postCommentId: number): Promise<IPostCommentAPI.Message> {
    const {data} = await api.delete<IPostCommentAPI.Message>(
      `${PATH_POST_COMMENT}/${postCommentId}`,
    );

    return data;
  }
}
