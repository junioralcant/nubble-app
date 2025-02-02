import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

import {colors} from './colors';

export const theme = createTheme({
  colors: colors.darkThemes,
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: 0},
};

export type ThemeTypes = typeof theme;
export type ThemeColorsTypes = keyof ThemeTypes['colors'];
