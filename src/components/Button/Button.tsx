import React from 'react';

import {
  ActivityIndicator,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

import {buttonPresets} from './button-presets';

export type ButtonPreset = 'primary' | 'outline' | 'ghost';

export type ButtonProps = {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
} & TouchableOpacityBoxProps;

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      testID="button"
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      borderRadius="s16"
      alignItems="center"
      justifyContent="center"
      {...buttonPreset.container}
      {...touchableOpacityBoxProps}>
      {loading ? (
        <ActivityIndicator color="error" />
      ) : (
        <Text
          preset="paragraphMedium"
          bold
          color={buttonPreset.content.color}
          {...buttonPreset.content.text}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
