import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<ComponentPropsWithoutRef<'button'>> & {
  htmlType?: 'button' | 'submit' | 'reset';
  variant?: 'secondary' | 'primary';
  size?: 'small' | 'medium' | 'large';
  extraClass?: string;
};
