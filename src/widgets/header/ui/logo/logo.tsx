import { Link } from 'react-router-dom';
import { ROUTE } from '#shared/config';
import { Logo as LogoStellar } from '#shared/ui/logo';

import s from './logo.module.scss';

export const Logo = () => {
  return (
    <Link to={ROUTE.HOME} className={s.header__logo}>
      <LogoStellar />
    </Link>
  );
};
