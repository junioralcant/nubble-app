import React from 'react';

import {authServiceFactory, useAuthSignUp} from '@domain';
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
import {useAsyncValidation} from './use-async-validation.hook';

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

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
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
        errorMessage={usernameValidation.errorMessage}
        RightComponent={
          usernameValidation.isFetching ? (
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
        errorMessage={emailValidation.errorMessage}
        RightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
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
          usernameValidation.notReady ||
          emailValidation.notReady
        }
      />
    </Screen>
  );
}
