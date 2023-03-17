import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import './BurgerConstructorTotal.css';
import { getIcons } from '../../utils/utils';

export const BurgerConstructorTotal = (props) => {
  const { totalPrice } = props;
  return (
    <div className="BurgerConstructorTotal mt-10">
      <span className="text text_type_digits-medium mr-2">610</span>
      {getIcons('primary')['currency']}
      <Button type="primary" size="medium" htmlType="submit" extraClass="ml-10">
        Оформить заказ
      </Button>
    </div>
  );
};
