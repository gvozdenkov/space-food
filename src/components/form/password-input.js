import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

export const PasswordInput = ({ control, inputName, placeholder, extraClass }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field, fieldState }) => (
        <Input
          id={inputName}
          type={isPasswordVisible ? 'text' : 'password'}
          icon={isPasswordVisible ? 'HideIcon' : 'ShowIcon'}
          placeholder={placeholder}
          extraClass={extraClass}
          error={fieldState?.invalid}
          errorText={fieldState.error?.message}
          onIconClick={toggleShowPassword}
          {...field}
        />
      )}
    />
  );
};
