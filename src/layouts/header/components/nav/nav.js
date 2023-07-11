import { menuItems } from '../../../../utils/config';
import { NavItem } from '../nav-item';
import s from './nav.module.scss';

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
