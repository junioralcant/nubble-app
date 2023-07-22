import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  AppStackParamsList,
  AppTabBottomTabNavigatorParamsList,
  AuthStackParamsList,
} from '@routes';

type AllStackParamsList = AuthStackParamsList & AppStackParamsList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllStackParamsList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, RouteName>;

export type AuthScreenProps<RouteName extends keyof AuthStackParamsList> =
  NativeStackScreenProps<AuthStackParamsList, RouteName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabNavigatorParamsList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabNavigatorParamsList, RouteName>,
  NativeStackScreenProps<AppStackParamsList, 'AppTabNavigate'>
>;
