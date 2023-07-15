import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {InputPassword} from '../../../components/InputPassword/InputPassWord';
import {RootStackParamsList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function goToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

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

      <Text
        preset="paragraphSmall"
        bold
        color="buttonPrimary"
        onPress={goToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button
        title="Criar uma conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
