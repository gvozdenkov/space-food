import { menuItems } from '../../utils/config';
import s from './nav.module.scss';
import { NavItem } from '../nav-item';
import { IntlConvert } from '../../utils/utils';

export const Nav = () => {
  const intlMenuItems = IntlConvert(menuItems, 'title');

  return (
    <nav>
      <ul className={s.nav}>
        {intlMenuItems.map((menu, index) => {
          return <NavItem item={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};
