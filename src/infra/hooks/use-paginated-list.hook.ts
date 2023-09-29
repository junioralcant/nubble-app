import {useEffect, useState} from 'react';

import {PageParams} from '@domain';
import {useInfiniteQuery} from '@tanstack/react-query';
import {Page} from '@types';

type UsePaginateListResult<TData> = {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
  hasNextPage: boolean;
};

export function usePaginateList<Data>(
  queryKey: readonly unknown[],
  getList: (params?: PageParams | undefined) => Promise<Page<Data>>,
): UsePaginateListResult<Data> {
  const [data, setData] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
  });

  useEffect(() => {
    if (query.data) {
      const newData = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);

      setData(newData);
    }
  }, [query.data]);

  return {
    list: data,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
