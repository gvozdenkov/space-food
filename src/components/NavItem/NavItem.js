import { getIcons } from '../../utils/utils';
import s from './NavItem.module.css';

export const NavItem = (props) => {
  const { iconName, text, isCentered, isActive } = props;

  const textStyle = isActive
    ? 'text text_type_main-default text_color_primary'
    : 'text text_type_main-default text_color_inactive';
  const liStyle = isCentered
    ? `${s.NavItem} p-4 pl-5 pr-5 ${s.NavItem_align_left} ${s.NavItem_align_right}`
    : `${s.NavItem} p-4 pl-5 pr-5`;
  const iconType = isActive ? 'primary' : 'secondary';

  return (
    <li className={liStyle}>
      {iconName && getIcons(iconType)[iconName]}
      {text && <p className={textStyle}>{text}</p>}
    </li>
  );
};
