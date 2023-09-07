import {apiAdapter} from '@api';

import {
  IPostComment,
  IPostCommentAPI,
  PageParams,
} from './post-comment.contracts';
import {postCommentAdapter} from './post-commet.adapter';

export class PostCommentService implements IPostComment {
  constructor(private readonly postCommentAPI: IPostCommentAPI) {}

  async getList(
    post_id: number,
    pageParams?: PageParams | undefined,
  ): Promise<IPostComment.Model> {
    const PER_PAGE = 10;

    const postComment = await this.postCommentAPI.getList(post_id, {
      page: pageParams?.page,
      perPage: PER_PAGE,
    });

    return {
      data: postComment.data.map(postCommentAdapter.toPostComment),
      meta: apiAdapter.toMetaDataPage(postComment.meta),
    };
  }
}
