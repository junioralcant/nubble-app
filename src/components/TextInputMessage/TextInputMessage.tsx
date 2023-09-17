import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

type TextInputMessageProps = {onPressSend: () => void} & RNTextInputProps;

export function TextInputMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextInputMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        paddingHorizontal="s16"
        paddingVertical="s14"
        backgroundColor="gray5"
        borderRadius="s12"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.gray1}]}
          value={value}
          {...rnTextInputProps}
        />

        <Pressable disabled={sendIsDisabled} onPress={onPressSend}>
          <Text
            preset="headingSmall"
            color={sendIsDisabled ? 'gray2' : 'primary'}
            bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
