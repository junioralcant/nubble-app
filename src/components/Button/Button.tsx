import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';

type ButtonProps = {
  title: string;
} & TouchableOpacityBoxProps;

export function Button({title, ...touchableOpacityBoxProps}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      borderRadius="s16"
      alignItems="center"
      justifyContent="center"
      {...touchableOpacityBoxProps}>
      <Text preset="paragraphMedium" bold color="primaryContrast">
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
