import { PropsWithChildren, ComponentPropsWithoutRef, forwardRef } from 'react';
import { clx } from '#utils/clx';
import s from './button.module.scss';

type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>> & {
  htmlType: 'button' | 'submit' | 'reset';
  variant?: 'secondary' | 'primary';
  size?: 'small' | 'medium' | 'large';
  extraClass?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, htmlType, variant, size, onClick, extraClass, ...rest }, ref) => {
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
