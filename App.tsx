import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';

import {Router} from './src/routes/Routes';
import {AuthCredentialsProvider} from './src/services/authCredentials';
import {initializeStorage, mmkvStorageFactory} from './src/services/storage';
import {ToastProvider} from './src/services/toast/Providers/ToastProvider';
import {theme} from './src/theme/theme';

const queryClient = new QueryClient();

initializeStorage(mmkvStorageFactory());

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <ToastProvider>
              <Router />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
