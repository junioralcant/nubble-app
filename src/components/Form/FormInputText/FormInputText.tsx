import React from 'react';
import {
  Controller,
  FieldValues,
  PathValue,
  UseControllerProps,
  Path,
} from 'react-hook-form';
import {TextInput, TextInputProps} from '../../TextInput/TextInput';

type FormInputTextProps<FormTypes extends FieldValues> = TextInputProps &
  UseControllerProps<FormTypes>;
export function FormInputText<FormTypes extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: FormInputTextProps<FormTypes>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange as PathValue<FormTypes, Path<FormTypes>>}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
