import {MutationOptions, QueryKey} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentRemove(
  postId: number,
  postCommentService: IPostComment,
  option?: MutationOptions<IPostComment.Message>,
) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    IPostComment.Message,
    unknown,
    {postCommentId: number}
  >({
    mutationFn: variables => postCommentService.remove(variables.postCommentId),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.PostCommentList, postId],
      });

      if (option?.onSuccess) {
        option.onSuccess(data);
      }
    },
    onError: () => {
      if (option?.onError) {
        option.onError(option.errorMessage || 'Ocorreu um error');
      }
    },
  });

  function removeComment(postCommentId: number) {
    mutate({postCommentId});
  }

  return {
    isLoading,
    isError,
    removeComment,
  };
}
