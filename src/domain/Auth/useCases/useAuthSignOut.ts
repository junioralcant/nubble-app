import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {IAuth} from '../auth.contracts';

export function useAuthSingOut(
  authService: IAuth,
  options?: MutationOptions<IAuth.Model>,
) {
  const {removeCredentials} = useAuthCredentials();
  const {isLoading, mutate} = useMutation<string, Error>({
    mutationFn: () => authService.signOut(),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: () => {
      authService.removeToken();
      removeCredentials();
    },
  });

  return {
    isLoading,
    signOut: () => mutate(),
  };
}
