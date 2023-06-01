import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import s from './layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.app}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
    </div>
  );
};
