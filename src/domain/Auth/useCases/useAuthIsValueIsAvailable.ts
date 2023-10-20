import {QueryKey} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {IAuth} from '../auth.contracts';

type Params = {
  authService: IAuth;
  username: string;
};

export function useAuthIsUsernameIsAvailable({authService, username}: Params) {
  const debouncedUsername = useDebounce<string>(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKey.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
}
