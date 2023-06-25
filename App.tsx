import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text semiBold italic>
          JUNIOR
        </Text>

        <Box paddingHorizontal="s24">
          <Icon name="eyeOff" color="carrotSecondary" />
          <Icon name="eyeOn" color="gray3" />
          <Icon name="camera" color="buttonPrimary" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
