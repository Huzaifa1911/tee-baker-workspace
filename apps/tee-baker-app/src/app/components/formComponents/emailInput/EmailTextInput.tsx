import React from 'react';
import { TextInput } from 'react-native-paper';

import { useAppTheme } from '@/assets';

import AppTextFormInput from '../appTextInput/AppTextFormInput';
import { AppTextFormInputProps } from '../appTextInput/AppTextInput.type';

const EmailTextInput = (props: Omit<AppTextFormInputProps, 'right' | 'keyboardType'>) => {
  const { mode = 'flat', ...rest } = props;
  const { colors } = useAppTheme();

  return (
    <AppTextFormInput
      autoCapitalize="none"
      mode={mode}
      label="Email"
      placeholder="Email"
      keyboardType="email-address"
      right={
        <TextInput.Icon
          icon="email-outline"
          size={20}
          style={{ ...(mode === 'flat' && { right: -16 }) }}
          color={isFocused => (isFocused ? colors.primary : colors.onBackground)}
        />
      }
      {...rest}
    />
  );
};

export default EmailTextInput;
