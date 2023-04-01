import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState } from 'react';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';

export const BurgerConstructorTotal = ({ totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size="medium" />}
      <Button
        type="primary"
        size="medium"
        htmlType="submit"
        extraClass="ml-10"
        onClick={() => setIsOpen(true)}
      >
        Оформить заказ
      </Button>
      <Modal ariaTitle="Идентификатор заказа" open={isOpen} setOpen={setIsOpen}>
        <OrderDetails orderNumber={345436} />
      </Modal>
    </div>
  );
};

BurgerConstructorTotal.propTypes = {
  totalPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
