import {PageParams, usePaginateList} from '@domain';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentList(
  postCommentService: IPostComment,
  postId: number,
) {
  function getList(params?: PageParams | undefined) {
    return postCommentService.getList(postId, params);
  }

  return usePaginateList(getList);
}
