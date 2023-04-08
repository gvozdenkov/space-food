import React from 'react';
import PropTypes from 'prop-types';
import s from './price.module.scss';
import { getIcons } from '../../utils';
import clsx from 'clsx';

export const Price = ({ amount, size = 'default', extraClass }) => {
  return (
    <span className={clsx(s.price, `text text_type_digits-${size} ${extraClass}`)}>
      {amount}
      {getIcons('primary')['currency']}
    </span>
  );
};

Price.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
};
