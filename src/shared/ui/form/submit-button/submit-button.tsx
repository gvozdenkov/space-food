import { forwardRef } from 'react';
import { Button } from '#shared/ui/form/button';
import { clx } from '#shared/lib';
import threeDots from '#images/three-dots.svg';
import { ButtonProps } from '../form-types';
import s from './submit-button.module.scss';

type SubmitButtonProps = ButtonProps & {
  isLoading?: boolean;
};

const Loading = () => <img src={threeDots} height={'20%'} className={s.loading} />;

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      onClick,
      extraClass,
      ...rest
    },
    ref,
  ) => {
    return (
      <Button
        htmlType='submit'
        variant={variant}
        size={size}
        ref={ref}
        onClick={onClick}
        extraClass={clx(s.submitBtn, extraClass)}
        {...rest}>
        <span className={clx({ [s.hiddenText]: isLoading })}>{children}</span>
        {isLoading && <Loading />}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
