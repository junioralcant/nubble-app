import {PostCommentAPI} from './post-comment-api.types';
import {PostCommentModel} from './post-comment.model';

function toPostComment(postCommentAPI: PostCommentAPI): PostCommentModel {
  return {
    id: postCommentAPI.id,
    message: postCommentAPI.message,
    author: {
      name: postCommentAPI.user.full_name,
      userName: postCommentAPI.user.username,
      profileUrl: postCommentAPI.user.profile_url,
    },
    created_at: postCommentAPI.created_at,
  };
}

export const postCommentAdapter = {toPostComment};
