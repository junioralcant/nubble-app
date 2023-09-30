import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {IAuth} from '../auth.contracts';

export function useAuthSingOut(
  authService: IAuth,
  options: MutationOptions<IAuth.Model>,
) {
  const {isLoading, mutate} = useMutation<string, Error>({
    mutationFn: () => authService.signOut(),
    retry: false,
    onError: error => {
      if (options.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    isLoading,
    signOut: () => mutate(),
  };
}
