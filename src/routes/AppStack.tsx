import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabNavigatorParamsList, AppTapNavigate} from '@routes';
import {SettingsScreen} from '@screens';

export type AppStackParamsList = {
  AppTabNavigate: NavigatorScreenParams<AppTabBottomTabNavigatorParamsList>;
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
