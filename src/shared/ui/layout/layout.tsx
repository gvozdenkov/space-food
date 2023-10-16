import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import s from './layout.module.scss';

type Props = {
  headerSlot?: ReactNode;
  sidebarSlot?: ReactNode;
  contentSlot?: ReactNode;
};

export const Layout = (props: Props) => {
  const { contentSlot } = props;

  return (
    <>
      {props.headerSlot}
      <main className={s.container}>
        {props.sidebarSlot && <div className={s.sidebar}>{props.sidebarSlot}</div>}
        <div className={s.content}>{props.contentSlot ? contentSlot : <Outlet />}</div>
      </main>
    </>
  );
};
