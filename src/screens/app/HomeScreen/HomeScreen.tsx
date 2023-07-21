import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList} from 'src/routes/AppStack';

import {Button, Screen, Text} from '@components';

type HomeScreenProps = NativeStackScreenProps<AppStackParamsList, 'HomeScreen'>;

export function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <Screen>
      <Text>Home Screen</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
