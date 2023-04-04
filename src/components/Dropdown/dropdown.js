import PropTypes from 'prop-types';
import s from './dropdown.module.scss';
import navList from '../../components/nav-item/nav-item.module.scss';
import navLink from '../../styles/blocks/nav-link/nav-link.module.scss';
import { MenuItem } from '../menu-item';
import clsx from 'clsx';

export const Dropdown = ({ submenu }) => {
  return (
    <ul className={clsx(s.dropdown)}>
      {submenu.map((menu, index) => (
        <li className={clsx(navList.navListItem)} key={index}>
          <a href={menu.url} className={clsx(navLink.navLink)}>
            <MenuItem title={menu.title} isActive={true} />
          </a>
        </li>
      ))}
    </ul>
  );
};

Dropdown.propTypes = {
  submenu: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string,
    }),
  ),
};
