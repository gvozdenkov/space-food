import { FocusEvent, MouseEvent, forwardRef, useCallback, useId, useMemo, useState } from 'react';
import { clx } from '#shared/lib';
import { primaryIcon, secondaryIcon } from '#shared/lib';
import { useForwardRef } from '#hooks/use-forward-ref';
import s from './input.module.scss';
import { InputProps } from '../form-types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      type,
      variant = 'default',
      icon,
      disabled,
      error,
      errorText,
      placeholder,
      extraClass = '',
      onIconClick,
      onFocus,
      onBlur,
      onChange,
      ...rest
    },
    forwardRef,
  ) => {
    const [focus, setFocus] = useState(false);
    const inputRef = useForwardRef<HTMLInputElement | null>(forwardRef);

    const id = useId();

    const handleInputFocus = (e: FocusEvent<HTMLInputElement>) => {
      setFocus(true);
      if (typeof onFocus === 'function') {
        onFocus(e);
      }
    };

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
      setFocus(false);
      if (typeof onBlur === 'function') {
        onBlur(e);
      }
    };

    const forceFocus = useCallback(() => {
      inputRef?.current?.focus();
    }, [inputRef]);

    const iconToRender = useMemo(() => {
      const hasAction = typeof onIconClick === 'function';
      const dumbIcon = disabled || !hasAction;

      const onIconClickProxy = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if (typeof onIconClick === 'function') {
          onIconClick(e);
        } else {
          forceFocus();
        }
      };

      return (
        icon && (
          <button
            type='button'
            className={clx(s.field__icon, {
              [s['field__icon_type_action']]: hasAction,
            })}
            onClick={onIconClickProxy}>
            {dumbIcon ? secondaryIcon(icon) : primaryIcon(icon)}
          </button>
        )
      );
    }, [icon, disabled, onIconClick, forceFocus]);

    const errorToRender = useMemo(
      () =>
        error &&
        errorText && (
          <p
            className={clx(s.fieldContainer__error, 'text', {
              [s[`text_type_main-${variant}`]]: variant,
            })}>
            {errorText}
          </p>
        ),
      [error, errorText, variant],
    );

    return (
      <div
        className={clx(s.fieldContainer, {
          [extraClass]: !!extraClass,
        })}>
        <div
          className={clx(s.field, {
            [s[`field_size_${variant}`]]: variant,
            [s.field_status_active]: focus,
            [s.field_status_disabled]: disabled,
            [s.field_status_error]: error,
          })}
          onClick={forceFocus}>
          <input
            id={id}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={onChange}
            type={type}
            ref={inputRef}
            value={value}
            placeholder=' '
            disabled={disabled}
            {...rest}
            className={clx('text', s.field__input, {
              [`text_type_main-${variant}`]: variant,
            })}
          />
          <label
            className={clx(s.field__label, 'text noselect', {
              [`text_type_main-${variant}`]: variant,
            })}
            htmlFor={id}>
            {placeholder}
          </label>
          {iconToRender}
        </div>
        {errorToRender}
      </div>
    );
  },
);

Input.displayName = 'Input';
