import React from 'react';

import {AppTabScreenProps} from '@routes';

import {Screen, Text} from '@components';

export function MyProfileScreen({}: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <Screen>
      <Text>MyProfileScreen</Text>
    </Screen>
  );
}
