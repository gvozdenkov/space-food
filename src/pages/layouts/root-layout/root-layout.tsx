import { Outlet } from 'react-router-dom';
import { Header } from '#layout/header';
import { clx } from '#utils/clx';
import { GlobalError } from '#components/global-error';
import s from './root-layout.module.scss';

type Props = {
  withError?: boolean;
};

export const RootLayout = ({ withError }: Props) => {
  const isErrorPage = !!withError;

  return (
    <>
      <Header />
      <main className={clx(s.main, { [s.errorPage]: isErrorPage })}>
        {withError ? <GlobalError /> : <Outlet />}
      </main>
    </>
  );
};
