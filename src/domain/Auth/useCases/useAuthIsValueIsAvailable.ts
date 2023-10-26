import {QueryKey} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {IAuth} from '../auth.contracts';

type Params = {
  authService: IAuth;
  username: string;
  enabled: boolean;
};

export function useAuthIsUsernameIsAvailable({
  authService,
  username,
  enabled,
}: Params) {
  const debouncedUsername = useDebounce<string>(username, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKey.IsUserNameAvailable, debouncedUsername],
    queryFn: () => authService.isUserNameAvailable(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== username;

  return {
    isAvailable: !!data,
    isFetching: isFetching || isDebouncing,
  };
}
