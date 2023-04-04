import { menuItems } from '../../utils/config';
import s from './nav.module.scss';
import { NavItem } from '../nav-item';

export const Nav = () => {
  return (
    <nav>
      <ul className={s.nav}>
        {menuItems.map((menu, index) => {
          return <NavItem item={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};
