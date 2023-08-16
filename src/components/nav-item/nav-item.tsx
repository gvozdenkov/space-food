import s from './nav-item.module.scss';
import { NavLink } from 'react-router-dom';
import { NavItem as NavItemProps } from '#layout/nav/nav-routes';
import { primaryIcon } from '#utils/get-icon';
import { clx } from '#utils/clx';
import { useTranslation } from 'react-i18next';

export const NavItem = ({ title, icon, url }: NavItemProps) => {
  const { t } = useTranslation();

  return (
    <li className={s.navItem}>
      <NavLink to={url} className='reset-link'>
        {({ isActive }) => (
          <div className={clx(s.menuItem, { [s.active]: isActive })}>
            {icon && primaryIcon(icon)}
            {title && <p className='text text_type_main-default'>{t(title)}</p>}
          </div>
        )}
      </NavLink>
    </li>
  );
};
