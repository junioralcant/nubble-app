import React from 'react';

import {AppTabScreenProps} from '@routes';

import {Button, Screen, Text} from '@components';

export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />

      <Button
        title="Favorite"
        onPress={() => navigation.navigate('FavoriteScreen')}
      />
    </Screen>
  );
}
