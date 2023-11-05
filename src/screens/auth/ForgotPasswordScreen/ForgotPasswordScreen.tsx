import React from 'react';

import {useAuthRequestNewPassword} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useToastService} from '@services';
import {useForm} from 'react-hook-form';

import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamsList} from '@routes';

import {Button, FormInputText, Screen, Text} from '@components';

import {
  ForgotPasswordSchemaTypes,
  forgotPasswordSchema,
} from './forgot-password.schema';

const resetParams: AuthStackParamsList['SuccessScreen'] = {
  title: `Enviamos as ${'\n'}instruções para seu ${'\n'}e-mail`,
  description: 'Clique no link enviado no seu e-mail para recuperar sua senha',
  icon: {
    name: 'messageRound',
    color: 'primary',
  },
};

export function ForgotPasswordScreen({}: AuthScreenProps<'ForgotPasswordScreen'>) {
  const {control, handleSubmit} = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const {reset} = useResetNavigationSuccess();

  const {showToast} = useToastService();

  const {requestNewPassword, isLoading} = useAuthRequestNewPassword({
    onSuccess: () => reset(resetParams),
    onError: message => showToast({message, type: 'error'}),
  });

  function navigateSuccessScreen(values: ForgotPasswordSchemaTypes) {
    requestNewPassword(values.email);
  }

  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Esqueci minha senha</Text>

      <Text preset="paragraphLarge" mt="s16">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormInputText
        control={control}
        name="email"
        label="E-mail"
        boxProps={{mt: 's32'}}
      />

      <Button
        loading={isLoading}
        title="Recuperar senha"
        mt="s40"
        onPress={handleSubmit(navigateSuccessScreen)}
      />
    </Screen>
  );
}
