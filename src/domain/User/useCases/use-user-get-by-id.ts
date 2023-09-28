import {QueryKey} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {IUser} from '../user.contract';

export function useUserGetById(id: number, userService: IUser) {
  const {data, isLoading, isError, refetch, isRefetching} = useQuery({
    queryKey: [QueryKey.UserGetById, id],
    queryFn: () => userService.getById(id),
    staleTime: 1000 * 30, //10s
  });

  return {
    user: data,
    isLoading,
    isError,
    refetch,
    isRefetching,
  };
}
