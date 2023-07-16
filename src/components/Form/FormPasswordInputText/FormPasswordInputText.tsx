import React from 'react';
import {
  Controller,
  FieldValues,
  PathValue,
  UseControllerProps,
  Path,
} from 'react-hook-form';
import {InputPassword, InputPasswordProps} from '@components';

type FormPasswordInputTextProps<FormTypes extends FieldValues> =
  InputPasswordProps & UseControllerProps<FormTypes>;
export function FormPasswordInputText<FormTypes extends FieldValues>({
  control,
  name,
  rules,
  ...inputPasswordProps
}: FormPasswordInputTextProps<FormTypes>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <InputPassword
          value={field.value}
          onChangeText={field.onChange as PathValue<FormTypes, Path<FormTypes>>}
          errorMessage={fieldState.error?.message}
          {...inputPasswordProps}
        />
      )}
    />
  );
}
