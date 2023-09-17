import {useEffect, useState} from 'react';

import {PageParams} from '@domain';
import {Page} from '@types';

export function usePaginateList<Data>(
  getList: (params?: PageParams | undefined) => Promise<Page<Data>>,
) {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  async function fetchInitialData() {
    try {
      setLoading(true);
      const {data, meta} = await getList({page});

      setData(data);
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

  async function fetchNextPageData() {
    try {
      setLoading(true);
      const {data, meta} = await getList({page});
      setData(dataListOld => [...dataListOld, ...data]);

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
      fetchNextPageData();
    }
  }

  useEffect(() => {
    fetchInitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
    loading,
    fetchInitialData,
    fetchNextPage,
    hasNextPage,
  };
}
