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
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialPosts() {
    try {
      setLoading(true);
      const {data, meta} = await postListService.getList({page: 1});
      setPosts(data);
      if (meta.hasNextPage) {
        setPage(1);
      } else {
        setHasNextPage(false);
      }
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
      const {data, meta} = await postListService.getList({page});
      setPosts(postsListOld => [...postsListOld, ...data]);

      if (meta.hasNextPage) {
        setPage(pageOld => pageOld + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (error: any) {
      console.log('Error: ', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNextPage() {
    if (!loading || !hasNextPage) {
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
