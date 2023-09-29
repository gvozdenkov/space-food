import { ReactNode } from 'react';
import s from './header-layout.module.scss';

type Props = {
  leftSlot?: ReactNode;
  centerSlot?: ReactNode;
  rightSlot?: ReactNode;
};

export const HeaderLayout = ({ leftSlot, centerSlot, rightSlot }: Props) => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        {leftSlot}
        {centerSlot}
        {rightSlot}
      </div>
    </header>
  );
};
