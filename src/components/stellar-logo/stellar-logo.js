import PropTypes from 'prop-types';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import logoCompact from '../../images/logo-compact.svg';

export const StellarLogo = ({ type = 'default', extraClass }) => {
  return type === 'default' ? (
    <div className={extraClass}>
      <Logo />
    </div>
  ) : (
    <img src={logoCompact} className={extraClass} alt='Stellar Burger logo' />
  );
};

StellarLogo.propTypes = {
  type: PropTypes.oneOf(['default', 'compact']),
  extraClass: PropTypes.string,
};
