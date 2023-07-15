import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {RootStackParamsList} from '../../../routes/Routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useResetNavigationSuccess} from '../../../hooks/use-reset-navigation-success';

type ScreenProps = NativeStackScreenProps<
  RootStackParamsList,
  'ForgotPasswordScreen'
>;
export function ForgotPasswordScreen({}: ScreenProps) {
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

      <TextInput
        errorMessage="Digite um e-mail válido"
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
