import {useAuthIsUsernameIsAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchemaTypes} from './sign-up.schema';

type Props = {
  watch: UseFormWatch<SignUpSchemaTypes>;
  getFieldState: UseFormGetFieldState<SignUpSchemaTypes>;
};

export function useAsyncValidation({watch, getFieldState}: Props) {
  const username = watch('username');
  const userNameState = getFieldState('username');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;
  const userNameQuery = useAuthIsUsernameIsAvailable({
    username,
    enabled: userNameIsValid,
  });

  return {
    errorMessage: userNameQuery.isUnavailable
      ? 'username indisponível'
      : undefined,
    notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
    isFetching: userNameQuery.isFetching,
  };
}
