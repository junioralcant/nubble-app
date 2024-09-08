import React from 'react';

import {postCommentServiceFactory, userServiceFactory} from '@domain';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AppTabBottomTabNavigatorParamsList, AppTapNavigate} from '@routes';
import {
  PostCommentScreen,
  ProfileScreen,
  PublishPostScreen,
  SearchScreen,
  SettingsScreen,
} from '@screens';

export type AppStackParamsList = {
  AppTabNavigate: NavigatorScreenParams<AppTabBottomTabNavigatorParamsList>;
  SettingsScreen: undefined;
  SearchScreen: undefined;
  PostCommentScreen: {
    postId: number;
    postAuthorId: number;
  };
  ProfileScreen: {
    userId: number;
  };
  PublishPostScreen: {
    imageUri: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamsList>();

type Props = {
  initialRouteName?: keyof AppStackParamsList;
};

export function AppStack({initialRouteName = 'AppTabNavigate'}: Props) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigate" component={AppTapNavigate} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
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

      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
    </Stack.Navigator>
  );
}
