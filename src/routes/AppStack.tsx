import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTapNavigate} from '@routes';
import {SettingsScreen} from '@screens';

export type AppStackParamsList = {
  AppTabNavigate: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="AppTabNavigate"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigate" component={AppTapNavigate} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
