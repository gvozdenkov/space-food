import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { useCreateOrder } from '../../utils/hooks/useCreateOrder';

export const BurgerConstructorTotal = ({ totalPrice }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const { data, error, loading } = useCreateOrder();

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
        <OrderDetails orderNumber={123456} />
      </Modal>
    </div>
  );
};

BurgerConstructorTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
