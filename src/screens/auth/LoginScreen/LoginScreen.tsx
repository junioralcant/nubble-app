import React from 'react';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {InputPassword} from '../../../components/InputPassword/InputPassWord';

export function LoginScreen() {
  return (
    <Screen>
      <Text preset="headingLarge" mb="s8">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <InputPassword
        errorMessage="teste erro"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mt: 's10'}}
      />

      <Text preset="paragraphSmall" bold color="buttonPrimary">
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button title="Criar uma conta" preset="outline" mt="s12" />
    </Screen>
  );
}
