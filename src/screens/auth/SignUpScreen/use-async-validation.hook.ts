import {useAuthIsEmailIsAvailable, useAuthIsUsernameIsAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchemaTypes} from './sign-up.schema';

type Props = {
  watch: UseFormWatch<SignUpSchemaTypes>;
  getFieldState: UseFormGetFieldState<SignUpSchemaTypes>;
};

type ReturnValues = {
  errorMessage?: string;
  notReady: boolean;
  isFetching: boolean;
};

export function useAsyncValidation({watch, getFieldState}: Props): {
  usernameValidation: ReturnValues;
  emailValidation: ReturnValues;
} {
  const username = watch('username');
  const userNameState = getFieldState('username');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;
  const userNameQuery = useAuthIsUsernameIsAvailable({
    username,
    enabled: userNameIsValid,
  });

  const email = watch('email');
  const emailState = getFieldState('email');
  const emailIsValid = !emailState.invalid && emailState.isDirty;
  const emailQuery = useAuthIsEmailIsAvailable({
    email,
    enabled: emailIsValid,
  });

  return {
    usernameValidation: {
      errorMessage: userNameQuery.isUnavailable
        ? 'username indisponível'
        : undefined,
      notReady: userNameQuery.isFetching || userNameQuery.isUnavailable,
      isFetching: userNameQuery.isFetching,
    },
    emailValidation: {
      errorMessage: emailQuery.isUnavailable ? 'email indisponível' : undefined,
      notReady: emailQuery.isFetching || emailQuery.isUnavailable,
      isFetching: emailQuery.isFetching,
    },
  };
}
