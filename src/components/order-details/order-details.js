import React from 'react';
import PropTypes from 'prop-types';
import s from './order-details.module.scss';
import clsx from 'clsx';

export const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={clsx(s.orderDetails, 'mt-4')}>
      <p className="text text_type_digits-large">{orderNumber}</p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
