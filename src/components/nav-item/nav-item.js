import cn from 'classnames';
import { getIcons } from '../../utils/utils';
import s from './nav-item.module.css';

export const NavItem = (props) => {
  const { iconName, text, isCentered, isActive } = props;

  const textStyle = isActive
    ? 'text text_type_main-default text_color_primary'
    : 'text text_type_main-default text_color_inactive';
  const liStyle = cn(
    s.navItem,
    'p-4 pl-5 pr-5',
    { [s.navItem_align_left]: isCentered },
    { [s.navItem_align_right]: isCentered }
  );
  const iconType = isActive ? 'primary' : 'secondary';

  return (
    <li className={liStyle}>
      {iconName && getIcons(iconType)[iconName]}
      {text && <p className={textStyle}>{text}</p>}
    </li>
  );
};
