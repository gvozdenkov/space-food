import { forwardRef } from 'react';
import { clx } from '#shared/lib';
import s from './button.module.scss';
import { ButtonProps } from '../form-types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, htmlType, variant = 'primary', size = 'medium', onClick, extraClass, ...rest },
    ref,
  ) => {
    const className = clx(
      s.button,
      {
        [s[`button_type_${variant}`]]: variant,
      },
      {
        [s[`button_size_${size}`]]: size,
      },
      extraClass,
    );

    return (
      <button type={htmlType} ref={ref} onClick={onClick} className={className} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
