import clsx from 'clsx';
import { getIcons } from '../../utils/utils';
import s from './nav-item.module.css';

export const NavItem = (props) => {
  const { children, iconName, isActive, extraClass } = props;

  const textStyle = clsx(
    'text text_type_main-default',
    { text_color_primary: isActive },
    { text_color_inactive: !isActive }
  );

  const liStyle = clsx(s.navItem, 'p-4 pl-5 pr-5', extraClass);

  const iconType = isActive ? 'primary' : 'secondary';

  return (
    <li className={liStyle}>
      {iconName && getIcons(iconType)[iconName]}
      {children && <p className={textStyle}>{children}</p>}
    </li>
  );
};
