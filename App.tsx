import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Box} from './src/components/Box/Box';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text semiBold italic>
          JUNIOR
        </Text>

        <Box paddingHorizontal="s24">
          <Button title="Entrar" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
