import {useState} from 'react';

import {IPostComment} from '../post-comment.contracts';

export function usePostCommentCreate(
  postCommentService: IPostComment,
  postId: number,
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();

  function createComment(message: string) {
    try {
      setLoading(true);
      setError(null);
      return postCommentService.create(postId, message);
    } catch (error) {
      setError(true);
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
