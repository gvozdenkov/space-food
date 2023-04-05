import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from '../nav-item/nav-item.module.scss';
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
          <button className={clsx(s.navItem__button)} type='button' aria-haspopup='menu'>
            <MenuItem iconName={item.icon} title={item.title} />
          </button>
          <Dropdown submenu={submenu} />
        </>
      ) : (
        <a href={item.url} className='reset-link'>
          <MenuItem iconName={item.icon} title={item.title} />
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
  active: PropTypes.bool,
};
