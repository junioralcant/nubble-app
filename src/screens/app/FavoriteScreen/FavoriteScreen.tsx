import React from 'react';

import {AppTabScreenProps} from '@routes';

import {Screen, Text} from '@components';

export function FavoriteScreen({}: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen>
      <Text>FavoriteScreen</Text>
    </Screen>
  );
}
