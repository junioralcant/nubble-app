import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s24">
          <Text preset="headingLarge" mb="s8">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <Box mb="s20">
            <TextInput
              placeholder="Digite seu e-mail"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>
          <Box>
            <TextInput
              placeholder="Digite sua senha"
              style={{borderWidth: 1, height: 50}}
            />
          </Box>

          <Text preset="paragraphSmall" bold color="buttonPrimary" mt="s10">
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" preset="outline" mt="s12" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
