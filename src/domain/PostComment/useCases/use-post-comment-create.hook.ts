import {MutationOptions, useMutation} from '@infra';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentCreate(
  postCommentService: IPostComment,
  postId: number,
  options?: MutationOptions<IPostComment.Model>,
) {
  const {mutate, loading, error} = useMutation<
    {message: string},
    IPostComment.Model
  >(({message}) => postCommentService.create(postId, message), options);

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loading,
    error,
  };
}
