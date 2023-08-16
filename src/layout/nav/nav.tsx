import { NavItem } from '../../components/nav-item';
import { navRoutes } from './nav-routes';
import s from './nav.module.scss';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.nav}>
        {navRoutes.map((navItem, i) => (
          <NavItem key={i} {...navItem} />
        ))}
      </ul>
    </nav>
  );
};
