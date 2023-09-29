import {PageParams} from '@domain';
import {QueryKey, usePaginateList} from '@infra';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentList(
  postCommentService: IPostComment,
  postId: number,
) {
  function getList(params?: PageParams | undefined) {
    return postCommentService.getList(postId, params);
  }

  return usePaginateList([QueryKey.PostCommentList, postId], getList);
}
