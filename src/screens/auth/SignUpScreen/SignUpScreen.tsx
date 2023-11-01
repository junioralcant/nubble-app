import React from 'react';

import {
  authServiceFactory,
  useAuthIsUsernameIsAvailable,
  useAuthSignUp,
} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamsList} from '@routes';

import {
  ActivityIndicator,
  Button,
  FormInputText,
  FormPasswordInputText,
  Screen,
  Text,
} from '@components';

import {SignUpSchemaTypes, signUpSchema} from './sign-up.schema';

const resetParams: AuthStackParamsList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso!',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'greenSuccess',
  },
};

const defaultValues: SignUpSchemaTypes = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp(authServiceFactory(), {
    onSuccess: () => {
      return reset(resetParams);
    },
  });

  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpSchemaTypes>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const username = watch('username');
  const userNameState = getFieldState('username');
  const userNameIsValid = !userNameState.invalid && userNameState.isDirty;
  const userNameQuery = useAuthIsUsernameIsAvailable({
    username,
    enabled: userNameIsValid,
  });

  function submitForm(formValues: SignUpSchemaTypes) {
    signUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar um conta
      </Text>

      <FormInputText
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
        errorMessage={
          userNameQuery.isUnavailable ? 'username indisponível' : undefined
        }
        RightComponent={
          userNameQuery.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormInputText
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />

      <FormInputText
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
      />

      <FormInputText
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInputText
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        loading={isLoading}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
        disabled={
          !formState.isValid ||
          userNameQuery.isFetching ||
          userNameQuery.isUnavailable
        }
      />
    </Screen>
  );
}
