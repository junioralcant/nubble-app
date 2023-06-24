import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../Box/Box';

type ButtonProps = {
  title: string;
};

export function Button({title}: ButtonProps) {
  return (
    <TouchableOpacityBox
      backgroundColor="buttonPrimary"
      paddingHorizontal="s20"
      height={50}
      borderRadius="s16"
      alignItems="center"
      justifyContent="center">
      <Text preset="paragraphMedium" bold style={{color: '#fff'}}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
