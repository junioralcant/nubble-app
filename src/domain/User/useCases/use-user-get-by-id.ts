import {QueryKey} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {IUser} from '../user.contract';

export function useUserGetById(id: number, userService: IUser) {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKey.UserGetById, id],
    queryFn: () => userService.getById(id),
  });

  return {
    user: data,
    isLoading,
    isError,
  };
}
