import cn from 'clsx';
import { getIcons } from '../../utils/utils';
import s from './nav-item.module.css';

export const NavItem = (props) => {
  const { iconName, text, isCentered, isActive } = props;

  const textStyle = cn(
    'text text_type_main-default',
    { text_color_primary: isActive },
    { text_color_inactive: !isActive }
  );

  const liStyle = cn(s.navItem, 'p-4 pl-5 pr-5', {
    [s.navItem_align_left]: isCentered,
    [s.navItem_align_right]: isCentered,
  });
  
  const iconType = isActive ? 'primary' : 'secondary';

  return (
    <li className={liStyle}>
      {iconName && getIcons(iconType)[iconName]}
      {text && <p className={textStyle}>{text}</p>}
    </li>
  );
};
