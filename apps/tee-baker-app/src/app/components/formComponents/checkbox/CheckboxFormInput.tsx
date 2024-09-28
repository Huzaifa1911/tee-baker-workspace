import React from 'react';
import { Controller } from 'react-hook-form';

import AppCheckbox from './Checkbox';
import { AppCheckboxFormInputProps } from './Checkbox.type';

const AppCheckboxFormInput = (props: AppCheckboxFormInputProps) => {
  const { control, name, ...rest } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, onBlur } }) => (
        <AppCheckbox checked={value?.checked} indeterminate={value?.indeterminate} onChange={onChange} onBlur={onBlur} {...rest} />
      )}
    />
  );
};

export default AppCheckboxFormInput;
