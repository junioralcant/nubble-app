import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  border,
  createBox,
  createRestyleComponent,
  layout,
  spacing,
  spacingShorthand,
} from '@shopify/restyle';

import {ThemeType} from '../../theme/theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<ThemeType>();

export type TouchableOpacityBoxProps = BackgroundColorProps<ThemeType> &
  BorderProps<ThemeType> &
  SpacingProps<ThemeType> &
  LayoutProps<ThemeType> &
  SpacingShorthandProps<ThemeType> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeType
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);
