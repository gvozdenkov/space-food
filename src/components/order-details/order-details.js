import React from 'react';
import PropTypes from 'prop-types';
import s from './order-details.module.scss';
import clsx from 'clsx';
import { Done } from '../done';

export const OrderDetails = ({ orderNumber }) => {
  return (
    <div className={clsx(s.orderDetails, 'mt-4')}>
      <p className="text text_type_digits-large">{orderNumber}</p>
      <p className="text text_type_main-medium mt-8 mb-15">идентификатор заказа</p>
      <Done />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
