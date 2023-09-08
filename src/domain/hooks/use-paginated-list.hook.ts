import {useEffect, useState} from 'react';

import {PageParams} from '@domain';
import {Page} from '@types';

export function usePaginateList<Data>(
  getList: (params?: PageParams | undefined) => Promise<Page<Data>>,
) {
  const [posts, setPosts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialPosts() {
    try {
      setLoading(true);
      const {data, meta} = await getList({page});

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
      const {data, meta} = await getList({page});
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