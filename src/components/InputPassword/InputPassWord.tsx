import React, {useState} from 'react';

import {TextInput, TextInputProps, Icon} from '@components';

export type InputPasswordProps = Omit<TextInputProps, 'RightComponent'>;

export function InputPassword({...textInputProps}: InputPasswordProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(true);

  function toggleSecureTextEntry() {
    setIsSecureTextEntry(old => !old);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...textInputProps}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
