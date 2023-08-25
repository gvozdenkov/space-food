import { IconName } from '#components/icons/types';
import { ComponentPropsWithoutRef, MouseEventHandler, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>> & {
  htmlType?: 'button' | 'submit' | 'reset';
  variant?: 'secondary' | 'primary';
  size?: 'small' | 'medium' | 'large';
  extraClass?: string;
};

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  value?: string;
  type?: 'text' | 'email' | 'password';
  variant?: 'default' | 'small';
  icon?: IconName;
  error?: boolean;
  errorText?: string;
  placeholder?: string;
  extraClass?: string;
  onIconClick?: (e: MouseEventHandler<HTMLButtonElement>) => void;
};
