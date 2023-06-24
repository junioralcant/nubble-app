import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {ThemeColorsTypes, ThemeTypes} from '../../theme/theme';
import {useTheme} from '@shopify/restyle';

type ActivityIndicatorProps = {
  color: ThemeColorsTypes;
} & Omit<RNActivityIndicatorProps, 'color'>;

export function ActivityIndicator({
  color,
  ...rNActivityIndicatorProps
}: ActivityIndicatorProps) {
  const {colors} = useTheme<ThemeTypes>();
  return (
    <RNActivityIndicator color={colors[color]} {...rNActivityIndicatorProps} />
  );
}
