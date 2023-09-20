import {api} from '@api';

import {PageParams} from '../Post/post.contracts';

import {IPostCommentAPI} from './post-comment.contracts';

export class PostCommentAPI implements IPostCommentAPI {
  private PATH = '/user/post_comment';

  async getList(
    post_id: number,
    pageParams?: PageParams | undefined,
  ): Promise<IPostCommentAPI.ResponseAPI> {
    const {data} = await api.get<IPostCommentAPI.ResponseAPI>(this.PATH, {
      params: {
        post_id,
        ...pageParams,
      },
    });

    return data;
  }

  async create(
    post_id: number,
    message: string,
  ): Promise<IPostCommentAPI.Model> {
    const {data} = await api.post<IPostCommentAPI.Model>(this.PATH, {
      post_id,
      message,
    });

    return data;
  }

  async remove(postCommentId: number): Promise<IPostCommentAPI.Message> {
    const {data} = await api.delete<IPostCommentAPI.Message>(
      `${this.PATH}/${postCommentId}`,
    );

    return data;
  }
}
