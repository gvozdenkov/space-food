import { ComponentPropsWithoutRef, MouseEvent, PropsWithChildren } from 'react';
import { clx } from '#shared/lib';
import s from './tab.module.scss';

type Tab = Omit<
  PropsWithChildren<ComponentPropsWithoutRef<'button'>>,
  'type' | 'role' | 'aria-selected'
> & {
  active: boolean;
  value: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Tab = ({ active, value, children, onClick, ...rest }: Tab) => {
  return (
    <button
      className={clx(s.tab, 'pt-4 pb-4 pr-10 pl-10 noselect text text_type_main-default', {
        [s.tab_type_current]: active,
      })}
      type='button'
      role='tab'
      aria-selected={active}
      id={`tab-${value}`}
      name={value}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};
