import {MutationOptions} from '@infra';
import {useAuthCredentials} from '@services';
import {useMutation} from '@tanstack/react-query';

import {IAuth} from '../auth.contracts';

type Variables = {
  email: string;
  password: string;
};

export function useAuthSingIn(
  authService: IAuth,
  options?: MutationOptions<IAuth.Model>,
) {
  const {saveCredentials} = useAuthCredentials();
  const {isLoading, mutate} = useMutation<IAuth.Model, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      authService.updateToken(authCredentials.token);
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading,
    signIn: (variables: Variables) => mutate(variables),
  };
}
