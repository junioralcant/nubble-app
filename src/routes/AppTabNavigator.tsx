import React from 'react';

import {postListService} from '@domain';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppTabBar} from '@routes';
import {
  FavoriteScreen,
  HomeScreen,
  MyProfileScreen,
  NewPostScreen,
} from '@screens';

export type AppTabBottomTabNavigatorParamsList = {
  HomeScreen: undefined;
  FavoriteScreen: undefined;
  MyProfileScreen: undefined;
  NewPostScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabBottomTabNavigatorParamsList>();

export function AppTapNavigate() {
  function renderTabProps(props: BottomTabBarProps) {
    return <AppTabBar {...props} />;
  }

  return (
    <Tab.Navigator
      tabBar={renderTabProps}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen">
        {props => <HomeScreen postListService={postListService} {...props} />}
      </Tab.Screen>
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
}
