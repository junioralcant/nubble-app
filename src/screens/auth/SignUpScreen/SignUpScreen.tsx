import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {InputPassword} from '../../../components/InputPassword/InputPassWord';
import {RootStackParamsList} from '../../../routes/Routes';
import {useResetNavigationSuccess} from '../../../hooks/use-reset-navigation-success';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
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

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <InputPassword
        label="Senha Nova"
        placeholder="Digite sua senha Nova"
        boxProps={{mb: 's48'}}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
