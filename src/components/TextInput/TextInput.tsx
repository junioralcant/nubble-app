import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/use-app-theme';

type TextInputProps = {
  label: string;
  errorMessage?: string;
  RightComponent?: React.ReactElement;
} & RNTextInputProps;

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  ...rnTextInput
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>

        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...rnTextInput}
            style={$textInputStyle}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};
