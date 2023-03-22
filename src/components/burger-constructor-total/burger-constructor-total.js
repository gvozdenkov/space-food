import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import s from './burger-constructor-total.module.css';
import clsx from 'clsx';
import { Price } from '../price';
import PropTypes from 'prop-types';

export const BurgerConstructorTotal = ({ totalPrice }) => {
  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10')}>
      {<Price amount={totalPrice} size="medium" />}
      <Button type="primary" size="medium" htmlType="submit" extraClass="ml-10">
        Оформить заказ
      </Button>
    </div>
  );
};

BurgerConstructorTotal.propTypes = {
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
