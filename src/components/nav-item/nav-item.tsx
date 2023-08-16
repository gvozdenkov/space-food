import s from './nav-item.module.scss';
import { NavLink } from 'react-router-dom';
import { NavItem as NavItemProps } from '#layout/nav/nav-routes';
import { primaryIcon } from '#utils/get-icon';
import { clx } from '#utils/clx';

export const NavItem = ({ title, url, icon }: NavItemProps) => {
  return (
    <li className={s.navItem}>
      <NavLink to={url} className='reset-link'>
        {({ isActive }) => (
          <div className={clx(s.menuItem, { [s.active]: isActive })}>
            {icon && primaryIcon(icon)}
            <p className='text text_type_main-default'>{title}</p>
          </div>
        )}
      </NavLink>
    </li>
  );
};
