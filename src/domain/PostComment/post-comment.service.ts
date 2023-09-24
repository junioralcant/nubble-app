import {apiAdapter} from '@api';
import {Page} from '@types';

import {PageParams} from '../Post/post.contracts';

import {PostCommentAPI} from './post-comment.api';
import {IPostComment, IPostCommentAPI} from './post-comment.contracts';
import {PostCommentModel} from './post-comment.model';
import {postCommentAdapter} from './post-commet.adapter';

export class PostCommentService implements IPostComment {
  constructor(private readonly postCommentAPI: IPostCommentAPI) {}

  async getList(
    postId: number,
    pageParams?: PageParams | undefined,
  ): Promise<Page<IPostComment.Model>> {
    const PER_PAGE = 10;

    const postComment = await this.postCommentAPI.getList(postId, {
      page: pageParams?.page,
      perPage: PER_PAGE,
    });

    return {
      data: postComment.data.map(postCommentAdapter.toPostComment),
      meta: apiAdapter.toMetaDataPage(postComment.meta),
    };
  }

  async create(postId: number, message: string): Promise<IPostComment.Model> {
    const postComment = await this.postCommentAPI.create(postId, message);

    return postCommentAdapter.toPostComment(postComment);
  }

  async remove(postCommentId: number): Promise<IPostComment.Message> {
    const response = await this.postCommentAPI.remove(postCommentId);
    return response;
  }

  isAllowToDelete(
    postComment: PostCommentModel,
    userId: number,
    postAuthorId: number,
  ): boolean {
    if (postComment.author.id === userId) {
      return true;
    }

    if (postAuthorId === userId) {
      return true;
    }

    return false;
  }
}

export function postCommentServiceFactory(): IPostComment {
  const postCommentAPI = new PostCommentAPI();
  return new PostCommentService(postCommentAPI);
}
