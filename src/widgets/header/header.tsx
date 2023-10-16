import { Link } from 'react-router-dom';

import { Nav } from './ui/nav';
import { Profile } from './ui/profile/profile';
import { ROUTE } from '#shared/config';
import { Logo } from '#shared/ui/logo';

import s from './header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.header__container}>
        <Nav />
        <Link to={ROUTE.HOME} className={s.header__logo}>
          <Logo />
        </Link>
        <Profile />
      </div>
    </header>
  );
};
