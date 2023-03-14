import React from 'react';
import './NavItem.css';

export const NavItem = ({ children, text, color }) => {
  return (
    <div className="NavItem flex-row">
      {children}
      {text ? <p className={`text text_type_main-default text_color_${color}`}>{text}</p> : null}
    </div>
  );
};
