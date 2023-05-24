import clsx from 'clsx';
import { getIcons } from '../../utils/utils';
import PropTypes from 'prop-types';
import s from './menu-item.module.scss';

export const MenuItem = ({ iconName, title, isActive }) => {
  return (
    <div className={clsx(s.menuItem, { [s.active]: isActive })}>
      {iconName && getIcons()[iconName]}
      {title && <p className='text text_type_main-default'>{title}</p>}
    </div>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
