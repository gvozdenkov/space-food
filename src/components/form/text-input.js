import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { Controller } from 'react-hook-form';

export const TextInput = ({ control, inputName, placeholder, icon, onIconClick, extraClass }) => {
  return (
    <Controller
      control={control}
      name={inputName}
      render={({ field, fieldState }) => (
        <Input
          id={inputName}
          type='text'
          icon={icon}
          onIconClick={onIconClick}
          extraClass={extraClass}
          placeholder={placeholder}
          error={fieldState?.invalid}
          errorText={fieldState.error?.message}
          {...field}
        />
      )}
    />
  );
};
