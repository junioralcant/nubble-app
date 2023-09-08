import {api} from '@api';

import {IPostCommentAPI, PageParams} from './post-comment.contracts';

export class PostCommentAPI implements IPostCommentAPI {
  async getList(
    post_id: number,
    pageParams?: PageParams | undefined,
  ): Promise<IPostCommentAPI.ResponseAPI> {
    const {data} = await api.get<IPostCommentAPI.ResponseAPI>(
      '/user/post_comment',
      {
        params: {
          post_id,
          ...pageParams,
        },
      },
    );

    return data;
  }
}
