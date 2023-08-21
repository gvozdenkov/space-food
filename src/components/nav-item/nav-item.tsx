import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clx } from '#utils/clx';
import { NavItem as NavItemProps } from '#constants/routes';
import { primaryIcon } from '#utils/get-icon';
import s from './nav-item.module.scss';

type NavItem = NavItemProps & {
  textStyle?: string;
};

export const NavItem = ({ title, icon, url, textStyle = 'text_type_main-default' }: NavItem) => {
  const { t } = useTranslation();

  return (
    <NavLink to={url} className='reset-link'>
      {({ isActive }) => (
        <div className={clx(s.iconWithText, { [s.active]: isActive })}>
          {icon && primaryIcon(icon)}
          {title && <p className={`text ${textStyle}`}>{t(title)}</p>}
        </div>
      )}
    </NavLink>
  );
};
