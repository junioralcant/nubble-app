import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AppStackParamsList} from 'src/routes/AppStack';

import {Screen, Text} from '@components';

type SettingsScreenProps = NativeStackScreenProps<
  AppStackParamsList,
  'SettingsScreen'
>;

export function SettingsScreen({}: SettingsScreenProps) {
  return (
    <Screen canGoBack>
      <Text>Settings Screen</Text>
    </Screen>
  );
}
