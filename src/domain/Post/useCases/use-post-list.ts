import {useEffect, useState} from 'react';

import {IPostList} from '../post.contracts';
import {PostModel} from '../post.model';
type UsePostListProps = {
  postListService: IPostList;
};

export function usePostList({postListService}: UsePostListProps) {
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();

  async function fetchPosts() {
    try {
      setLoading(true);
      const postsList = await postListService.getList();
      setPosts(postsList);
    } catch (error: any) {
      console.log('Error: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    posts,
    error,
    loading,
    fetchPosts,
  };
}
