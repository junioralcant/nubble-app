export type PostAPI = {
  id: number;
  text: string;
  user_id: number;
  image_url: string;
  is_fixed: boolean;
  is_activated: boolean;
  created_at: string;
  updated_at: string;
  user: UserAPI;
  status: string;
  meta: {
    like_count: string;
    favorite_count: string;
    comments_count: string;
  };
};

type UserAPI = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  profile_url: string;
  is_online: boolean;
  full_name: string;
};
