import React from 'react';
import PropTypes from 'prop-types';
import s from '../nav-item/nav-item.module.scss';
import navLink from '../../styles/blocks/nav-link/nav-link.module.scss';
import clsx from 'clsx';
import { Dropdown } from '../Dropdown';
import { MenuItem } from '../menu-item/menu-item';

export const NavItem = ({ item }) => {
  // in the mobile menu the Profile has drop-down submenus
  const menuType = 'desktop';
  const submenu = menuType === 'desktop' ? item.submenu : item.mobileSubmenu;

  return (
    <li className={clsx(s.navItem)}>
      {submenu ? (
        <>
          <button
            className={clsx(s.navItem__button, navLink.navLink)}
            type='button'
            aria-haspopup='menu'>
            <MenuItem iconName={item.icon} title={item.title} isActive={true} />
          </button>
          <Dropdown submenu={submenu} />
        </>
      ) : (
        <a href={item.url} className={clsx(navLink.navLink)}>
          <MenuItem iconName={item.icon} title={item.title} isActive={true} />
        </a>
      )}
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    url: PropTypes.string.isRequired,
  }),
};
