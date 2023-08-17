import { Link } from 'react-router-dom';
import { NavItem } from '../../components/nav-item';
import { navRoutes } from './nav-routes';
import s from './nav.module.scss';
import { ROUTES } from '#constants/routes';
import { Logo } from '#components/logo';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navRoutes.map((item, i) => (
          <NavItem key={i} {...item} />
        ))}
      </ul>

      <Link to={ROUTES.HOME} className={s.logo}>
        <Logo />
      </Link>
    </nav>
  );
};
