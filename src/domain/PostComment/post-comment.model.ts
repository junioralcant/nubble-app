export type PostCommentModel = {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    userName: string;
    name: string;
    profileUrl: string;
  };
};
