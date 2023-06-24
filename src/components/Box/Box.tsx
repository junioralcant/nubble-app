import {ComponentProps} from 'react';
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

import {ThemeTypes} from '../../theme/theme';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

export const Box = createBox<ThemeTypes>();
export type BoxProps = ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<ThemeTypes> &
  BorderProps<ThemeTypes> &
  SpacingProps<ThemeTypes> &
  LayoutProps<ThemeTypes> &
  SpacingShorthandProps<ThemeTypes> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeTypes
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);
