import clsx from 'clsx';
import { getIcons } from '../../utils/utils';
import PropTypes from 'prop-types';

export const MenuItem = ({ iconName, title, isActive = false }) => {
  const iconType = isActive ? 'primary' : 'secondary';

  const textStyle = clsx(
    'text text_type_main-default',
    { text_color_primary: isActive },
    { text_color_inactive: !isActive },
  );

  return (
    <>
      {iconName && getIcons(iconType)[iconName]}
      {title && <p className={textStyle}>{title}</p>}
    </>
  );
};

MenuItem.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};
