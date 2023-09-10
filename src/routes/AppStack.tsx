import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabNavigatorParamsList, AppTapNavigate} from '@routes';
import {PostCommentScreen, SettingsScreen} from '@screens';

export type AppStackParamsList = {
  AppTabNavigate: NavigatorScreenParams<AppTabBottomTabNavigatorParamsList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: string;
  };
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
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
    </Stack.Navigator>
  );
}
