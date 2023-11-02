import {QueryKey} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authServiceFactory} from '../auth.service';

type Params<T extends {length: number}> = {
  value: T;
  enabled: boolean;
  queryKey: QueryKey;
  isAvailableFunc: (value: T) => Promise<boolean>;
};

export function useAuthIsValueAvailable<T extends {length: number}>({
  value,
  enabled,
  isAvailableFunc,
  queryKey,
}: Params<T>) {
  const debouncedUsername = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [queryKey, debouncedUsername],
    queryFn: () => isAvailableFunc(debouncedUsername),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedUsername.length > 0,
  });

  const isDebouncing = debouncedUsername !== value;

  return {
    isAvailable: !!data,
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}

export function useAuthIsUsernameIsAvailable({
  username,
  enabled,
}: {
  username: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: username,
    enabled,
    isAvailableFunc: () => authServiceFactory().isUserNameAvailable(username),
    queryKey: QueryKey.IsUserNameAvailable,
  });
}

export function useAuthIsEmailIsAvailable({
  email,
  enabled,
}: {
  email: string;
  enabled: boolean;
}) {
  return useAuthIsValueAvailable({
    value: email,
    enabled,
    isAvailableFunc: authServiceFactory().isEmailAvailable,
    queryKey: QueryKey.IsEmailAvailable,
  });
}
