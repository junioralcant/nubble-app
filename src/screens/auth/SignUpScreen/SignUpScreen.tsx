import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {RootStackParamsList} from '@routes';
import {useResetNavigationSuccess} from '@hooks';
import {SignUpSchemaTypes, signUpSchema} from './sign-up.schema';
import {
  Button,
  FormInputText,
  FormPasswordInputText,
  Screen,
  Text,
} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchemaTypes>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpSchemaTypes) {
    console.log(formValues);

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'greenSuccess',
      },
    });
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
      />

      <FormInputText
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome completo"
        placeholder="Digite seu nome"
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
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}
