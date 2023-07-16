import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {useResetNavigationSuccess} from '@hooks';
import {RootStackParamsList} from '@routes';

import {Button, FormInputText, Screen, Text} from '@components';

import {forgotPasswordSchema} from './forgot-password.schema';

type ScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ForgotPasswordScreen'
>;
export function ForgotPasswordScreen({}: ScreenProps) {
  const {control} = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  const {reset} = useResetNavigationSuccess();

  function navigateSuccessScreen() {
    reset({
      title: `Enviamos as ${'\n'}instruções para seu ${'\n'}e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
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
        title="Recuperar senha"
        mt="s40"
        onPress={navigateSuccessScreen}
      />
    </Screen>
  );
}
