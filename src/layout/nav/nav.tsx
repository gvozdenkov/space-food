import { Link } from 'react-router-dom';
import { NavItem } from '../../components/nav-item';
import { ROUTES, navRoutes } from '#constants/routes';
import { Logo } from '#components/logo';
import s from './nav.module.scss';
import { clx } from '#utils/clx';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        {navRoutes.map((item, i) => {
          const isLastElement = i === navRoutes.length - 1;

          return (
            <li key={i} className={clx({ [s.navLast]: isLastElement })}>
              <NavItem key={i} {...item} />
            </li>
          );
        })}
      </ul>

      <Link to={ROUTES.HOME} className={s.logo}>
        <Logo />
      </Link>
    </nav>
  );
};
