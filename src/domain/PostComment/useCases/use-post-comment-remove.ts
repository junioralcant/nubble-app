import {MutationOptions, useMutation} from '@infra';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentRemove(
  postCommentService: IPostComment,
  option?: MutationOptions<IPostComment.Message>,
) {
  return useMutation<{postCommentId: number}, IPostComment.Message>(
    ({postCommentId}) => postCommentService.remove(postCommentId),
    option,
  );
}
