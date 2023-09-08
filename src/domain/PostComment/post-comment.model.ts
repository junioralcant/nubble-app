export type PostCommentModel = {
  id: number;
  message: string;
  created_at: string;
  author: {
    userName: string;
    name: string;
    profileUrl: string;
  };
};
