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
  const [page, setPage] = useState(1);

  async function fetchInitialPosts() {
    try {
      setLoading(true);
      const postsList = await postListService.getList({page: 1});
      setPage(1);
      setPosts(postsList);
    } catch (error: any) {
      console.log('Error: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  async function fetchNextPagePosts() {
    try {
      setLoading(true);
      const postsList = await postListService.getList({page});
      setPage(pageOld => pageOld + 1);
      setPosts(postsListOld => [...postsListOld, ...postsList]);
    } catch (error: any) {
      console.log('Error: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading) {
      fetchNextPagePosts();
    }
  }

  useEffect(() => {
    fetchInitialPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    posts,
    error,
    loading,
    fetchInitialPosts,
    fetchNextPage,
  };
}
