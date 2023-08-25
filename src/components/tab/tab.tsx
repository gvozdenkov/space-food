import { PropsWithChildren } from 'react';
import { clx } from '#utils/clx';
import s from './tab.module.scss';

type Tab = PropsWithChildren<{
  active: boolean;
  value: string;
  onClick: (value: string) => void;
}>;

export const Tab = ({ active, value, children, onClick: handleClick }: Tab) => {
  const className = clx(
    s.tab,
    {
      [s.tab_type_current]: active,
    },
    'pt-4',
    'pr-10',
    'pb-4',
    'pl-10',
    'noselect',
  );

  const onClick = () => {
    if (typeof handleClick === 'function') {
      handleClick(value);
    }
  };

  return (
    <div className={className} onClick={onClick}>
      <span className='text text_type_main-default'>{children}</span>
    </div>
  );
};
