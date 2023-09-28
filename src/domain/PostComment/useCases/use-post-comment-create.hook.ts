import {MutationOptions, QueryKey} from '@infra';
import {useMutation, useQueryClient} from '@tanstack/react-query';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentCreate(
  postCommentService: IPostComment,
  postId: number,
  options?: MutationOptions<IPostComment.Model>,
) {
  const queryClient = useQueryClient();

  const {mutate, isLoading, isError} = useMutation<
    IPostComment.Model,
    unknown,
    {message: string}
  >({
    mutationFn: variables =>
      postCommentService.create(postId, variables.message),
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: [QueryKey.PostCommentList, postId],
      });

      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: () => {
      if (options?.onError) {
        options.onError(options?.errorMessage || 'Ocorreu um error');
      }
    },
  });

  async function createComment(message: string) {
    mutate({message});
  }

  return {
    createComment,
    isLoading,
    isError,
  };
}
