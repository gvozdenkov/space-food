import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';
import { Header } from '#layout/header';
import { clx } from '#utils/clx';
import { GlobalError } from '#components/global-error';
import s from './root-layout.module.scss';

type RootLayoutProps = {
  outlet?: ReactElement;
};

export const RootLayout = ({ outlet }: RootLayoutProps) => {
  const isErrorPage = !!outlet;

  return (
    <>
      <Header />
      <main className={clx(s.main, { [s.errorPage]: isErrorPage })}>
        {outlet ? <GlobalError /> : <Outlet />}
      </main>
    </>
  );
};
