import React from 'react';
import {Text} from '../Text/Text';
import {Box} from '../Box/Box';

import {useTheme} from '@shopify/restyle';
import {ThemeType} from '../../theme/theme';

type ButtonProps = {
  title: string;
};

export function Button({title}: ButtonProps) {
  const {colors} = useTheme<ThemeType>();
  return (
    <Box
      padding="s20"
      style={{
        backgroundColor: colors.carrotSecondary,
      }}>
      <Text>{title}</Text>
    </Box>
  );
}
