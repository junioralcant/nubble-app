import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {ThemeColorsTypes} from '../../theme/theme';
import {useAppTheme} from '../../hooks/use-app-theme';

type ActivityIndicatorProps = {
  color: ThemeColorsTypes;
} & Omit<RNActivityIndicatorProps, 'color'>;

export function ActivityIndicator({
  color,
  ...rNActivityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator color={colors[color]} {...rNActivityIndicatorProps} />
  );
}
