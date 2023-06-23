import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text/Text';
import {useTheme} from '@shopify/restyle';
import {ThemeType} from '../../theme/theme';

type ButtonProps = {
  title: string;
};

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<ThemeType>();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.carrotSecondary,
      }}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
