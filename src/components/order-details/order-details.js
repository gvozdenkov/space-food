import React from 'react';
import PropTypes from 'prop-types';
import s from './order-details.module.scss';
import clsx from 'clsx';
import { Done } from '../done';
import { useIntl } from 'react-intl';

export const OrderDetails = ({ orderNumber }) => {
  const intl = useIntl();

  return (
    <div className={clsx(s.orderDetails, 'mt-4')}>
      <p className='text text_type_digits-large'>{orderNumber}</p>
      <p className='text text_type_main-medium mt-8 mb-15'>
        {intl.formatMessage({ id: 'checkout.popup.title' })}
      </p>
      <Done />
      <p className='text text_type_main-default mt-15 mb-2'>
        {intl.formatMessage({ id: 'checkout.popup.text1' })}
      </p>
      <p className='text text_type_main-default text_color_inactive'>
        {intl.formatMessage({ id: 'checkout.popup.text2' })}
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
