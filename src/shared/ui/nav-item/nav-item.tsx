import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { primaryIcon, secondaryIcon, clx } from '#shared/lib';
import { IconName } from '../icons';

import s from './nav-item.module.scss';

type NavItem = RequireAtLeastOne<
  {
    url: string;
    title?: string;
    icon?: IconName;
    textStyle?: string;
    extraClass?: string;
  },
  'title' | 'icon'
>;

export const NavItem = ({
  title,
  icon,
  url,
  textStyle = 'text text_type_main-default',
  extraClass = '',
}: NavItem) => {
  const { t } = useTranslation();

  return (
    <NavLink to={url} className={clx('reset-link', { [extraClass]: !!extraClass })}>
      {({ isActive }) => {
        const getIcon = isActive ? primaryIcon : secondaryIcon;
        return (
          <div className={clx(s.iconWithText, { [s.active]: isActive })}>
            {icon && getIcon(icon)}
            {title && <p className={`${textStyle}`}>{t(title)}</p>}
          </div>
        );
      }}
    </NavLink>
  );
};
