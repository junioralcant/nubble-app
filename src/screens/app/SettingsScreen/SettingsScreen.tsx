import React from 'react';

import {AppScreenProps} from '@routes';

import {Screen, Text} from '@components';

export function SettingsScreen({}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text>Settings Screen</Text>
    </Screen>
  );
}
