import clsx from 'clsx';
import { getIcons } from '../../../../utils/utils';
import PropTypes from 'prop-types';
import s from './menu-item.module.scss';
import { useTranslation } from 'react-i18next';

export const MenuItem = ({ iconName, title, isActive }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(s.menuItem, { [s.active]: isActive })}>
      {iconName && getIcons()[iconName]}
      <p className='text text_type_main-default'>{t(title)}</p>
    </div>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string,
  // title: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};
