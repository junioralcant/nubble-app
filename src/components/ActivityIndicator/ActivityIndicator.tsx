import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColorsTypes} from '@theme';

type ActivityIndicatorProps = {
  color?: ThemeColorsTypes;
} & Omit<RNActivityIndicatorProps, 'color'>;

export function ActivityIndicator({
  color = 'primary',
  ...rNActivityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator color={colors[color]} {...rNActivityIndicatorProps} />
  );
}
