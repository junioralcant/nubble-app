import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {IAuth} from '../auth.contracts';

export function useAuthSignUp(
  authService: IAuth,
  options?: MutationOptions<void>,
) {
  const mutation = useMutation<void, Error, IAuth.ModelSignUpData>({
    mutationFn: signUpData => authService.signUp(signUpData),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function signUp(signUpData: IAuth.ModelSignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
