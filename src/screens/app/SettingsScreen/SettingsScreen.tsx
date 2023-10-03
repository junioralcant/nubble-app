import React from 'react';

import {authServiceFactory, useAuthSingOut} from '@domain';

import {AppScreenProps} from '@routes';

import {Button, Screen} from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  const {isLoading, signOut} = useAuthSingOut(authServiceFactory());
  return (
    <Screen canGoBack>
      <Button title="Sair da conta" loading={isLoading} onPress={signOut} />
    </Screen>
  );
}
