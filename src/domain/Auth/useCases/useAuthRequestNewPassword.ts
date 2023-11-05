import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authServiceFactory} from '../auth.service';

export function useAuthRequestNewPassword(options?: MutationOptions<string>) {
  const {mutate, isLoading} = useMutation<string, Error, string>({
    mutationFn: email => authServiceFactory().requestNewPassword({email}),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options?.onError(error.message);
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options?.onSuccess(message);
      }
    },
  });

  return {
    requestNewPassword: (email: string) => mutate(email),
    isLoading,
  };
}
