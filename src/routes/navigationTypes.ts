import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamsList} from './AppStack';
import {AuthStackParamsList} from './AuthStack';

type AllStackParamsList = AuthStackParamsList & AppStackParamsList;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AllStackParamsList {}
  }
}

export type AppScreenProps<RouteName extends keyof AllStackParamsList> =
  NativeStackScreenProps<AllStackParamsList, RouteName>;
