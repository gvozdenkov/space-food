import PropTypes from 'prop-types';
import s from '../nav-item/nav-item.module.scss';
import clsx from 'clsx';
import { MenuItem } from '../../../../components/menu-item/menu-item';
import { NavLink } from 'react-router-dom';

export const NavItem = ({ item }) => {
  return (
    <li className={clsx(s.navItem)}>
      <NavLink to={item.url} className={clsx('reset-link')}>
        {({ isActive }) => <MenuItem iconName={item.icon} title={item.title} isActive={isActive} />}
      </NavLink>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
  active: PropTypes.bool,
};
