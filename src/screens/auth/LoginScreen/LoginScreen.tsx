import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {InputPassword} from '../../../components/InputPassword/InputPassWord';
import {RootStackParamsList} from '../../../routes/Routes';
import {Controller, useForm} from 'react-hook-form';
import {Alert} from 'react-native';

type LoginFormTypes = {
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<LoginFormTypes>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleSubmitForm({email, password}: LoginFormTypes) {
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

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail é obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <InputPassword
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{mt: 's10'}}
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
          />
        )}
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
