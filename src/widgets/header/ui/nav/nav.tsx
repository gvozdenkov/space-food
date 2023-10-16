import { ROUTE } from '#shared/config';
import { NavItem } from '#shared/ui';

import s from './nav.module.scss';

export const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.navList}>
        <li key='constructor'>
          <NavItem url={ROUTE.HOME} icon='burger' title='header.menu.constructor' />
        </li>
        <li key='feed'>
          <NavItem url={ROUTE.FEED} icon='list' title='header.menu.feed' />
        </li>
      </ul>
    </nav>
  );
};
