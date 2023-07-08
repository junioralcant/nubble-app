import React, {ReactNode} from 'react';
import {ScrollView, View} from 'react-native';

type Props = {
  children: ReactNode;
  backgroundColor: string;
};

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return <ScrollView style={{backgroundColor, flex: 1}}>{children}</ScrollView>;
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor}}>{children}</View>;
}
