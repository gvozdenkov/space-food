import React from 'react';
import PropTypes from 'prop-types';
import s from './checkout-order-details.module.scss';
import { LoaderShape } from '../LoaderShape';
import clsx from 'clsx';
import { useIntl } from 'react-intl';

export const CheckoutOrderDetails = () => {
  const intl = useIntl();

  return (
    <div className={clsx(s.checkoutOrderDetails, 'mt-8')}>
      <LoaderShape />
      <p className='text text_type_main-default mt-10 ellipsis'>
        {intl.formatMessage({ id: 'constructor.createOrder.modal.loading.text' })}
      </p>
    </div>
  );
};

CheckoutOrderDetails.propTypes = {};
