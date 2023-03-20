import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import s from './burger-constructor-total.module.css';
import { getIcons } from '../../utils';
import clsx from 'clsx';

export const BurgerConstructorTotal = (props) => {
  const { totalPrice } = props;
  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10')}>
      <span className="text text_type_digits-medium mr-2">610</span>
      {getIcons('primary')['currency']}
      <Button type="primary" size="medium" htmlType="submit" extraClass="ml-10">
        Оформить заказ
      </Button>
    </div>
  );
};
