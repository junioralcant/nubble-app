import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {zodResolver} from '@hookform/resolvers/zod';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {RootStackParamsList} from '../../../routes/Routes';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';
import {LoginSchemaTypes, loginSchema} from './login.schema';
import {FormInputText} from '../../../components/Form/FormInputText/FormInputText';
import {FormPasswordInputText} from '../../../components/Form/FormPasswordInputText/FormPasswordInputText';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginSchemaTypes>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleSubmitForm({email, password}: LoginSchemaTypes) {
    Alert.alert(email, password);
  }

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
        boxProps={{mt: 's10'}}
      />

      <Text
        preset="paragraphSmall"
        bold
        color="buttonPrimary"
        onPress={goToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Entrar"
        mt="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(handleSubmitForm)}
      />
      <Button
        title="Criar uma conta"
        preset="outline"
        mt="s12"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
