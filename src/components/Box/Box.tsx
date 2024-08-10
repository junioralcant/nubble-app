import {ComponentProps} from 'react';
import {
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

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

import {ThemeTypes} from '@theme';

export const Box = createBox<ThemeTypes>();
export type BoxProps = ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<ThemeTypes> &
  BorderProps<ThemeTypes> &
  SpacingProps<ThemeTypes> &
  LayoutProps<ThemeTypes> &
  SpacingShorthandProps<ThemeTypes>;

export type TouchableOpacityBoxProps = TouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  ThemeTypes
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<
  PressableBoxProps,
  ThemeTypes
>(
  [backgroundColor, spacing, layout, border, spacingShorthand],
  TouchableOpacity,
);
