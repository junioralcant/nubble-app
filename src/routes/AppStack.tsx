import React from 'react';

import {postCommentServiceFactory, userServiceFactory} from '@domain';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabNavigatorParamsList, AppTapNavigate} from '@routes';
import {PostCommentScreen, ProfileScreen, SettingsScreen} from '@screens';

export type AppStackParamsList = {
  AppTabNavigate: NavigatorScreenParams<AppTabBottomTabNavigatorParamsList>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
  ProfileScreen: {
    userId: number;
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
      <Stack.Screen name="PostCommentScreen">
        {props => (
          <PostCommentScreen
            postCommentListService={postCommentServiceFactory()}
            {...props}
          />
        )}
      </Stack.Screen>
      <Stack.Screen name="ProfileScreen">
        {props => (
          <ProfileScreen userService={userServiceFactory()} {...props} />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
