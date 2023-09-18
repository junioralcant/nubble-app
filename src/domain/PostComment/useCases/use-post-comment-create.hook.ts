import {useState} from 'react';

import {IPostComment} from '../post-comment.contracts';

type Options = {
  onSuccess?: (data: IPostComment.Model) => void;
  onError?: (message: string) => void;
};

export function usePostCommentCreate(
  postCommentService: IPostComment,
  postId: number,
  options?: Options,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();

  async function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      const postComment = await postCommentService.create(postId, message);
      if (options?.onSuccess) {
        options?.onSuccess(postComment);
      }
    } catch (error) {
      setError(true);
      if (options?.onError) {
        options?.onError('Error ao criar comentário');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
