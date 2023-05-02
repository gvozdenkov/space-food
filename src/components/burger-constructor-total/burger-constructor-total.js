import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { useIntl } from 'react-intl';
import { CheckoutOrderDetails } from '../CheckoutOrderDetails';
import { ErrorModalDetails } from '../ErrorModalDetails';
import { FETCH_STATUS } from '../../utils/constants';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getTotalPrice } from '../../features/burger-constructor/burger-constructor-slice';
import { useCreateOrderMutation } from '../../features/api/api-slice';
import { orderCreated } from '../../features/order/order-slice';

export const BurgerConstructorTotal = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [createOrder, { isLoading, isFetching, isSuccess, isError, error, data: order }] =
    useCreateOrderMutation();

  const { bun, ingredients, totalPrice } = useSelector((state) => state.burgerConstructor);
  const cart = [bun, ...ingredients, bun];
  const cartIngredients = cart.map((item) => item._id);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [bun, ingredients, dispatch]);

  const [openModal, setOpenModal] = useState(null);
  const close = () => setOpenModal(null);

  const handleCreateOrder = async () => {
    if (!isLoading && !isFetching) {
      try {
        await createOrder({ ingredients: cartIngredients }).unwrap();
      } catch (err) {
        console.error('Failed to create the order: ', err);
      }
    }
  };

  useEffect(() => {
    if (isError) setOpenModal(FETCH_STATUS.FAILED);
    if (isLoading) setOpenModal(FETCH_STATUS.LOADING);
    if (isSuccess) {
      dispatch(orderCreated(order));
      setOpenModal(FETCH_STATUS.SUCCESSED);
    }
  }, [isError, isLoading, isSuccess, dispatch, order]);

  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size='medium' />}

      <Button
        type='primary'
        size='medium'
        htmlType='submit'
        extraClass={clsx({ ellipsis: isLoading }, 'ml-10')}
        onClick={handleCreateOrder}
        disabled={isLoading}>
        {isLoading
          ? intl.formatMessage({ id: 'constructor.createOrder.loading' })
          : intl.formatMessage({ id: 'constructor.createOrder' })}
      </Button>

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {openModal === FETCH_STATUS.LOADING && (
          <Modal
            title={intl.formatMessage({ id: 'constructor.createOrder.loading' })}
            handleClose={close}>
            <CheckoutOrderDetails />
          </Modal>
        )}

        {openModal === FETCH_STATUS.FAILED && (
          <Modal
            title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
            handleClose={close}>
            <ErrorModalDetails
              error={error}
              message={intl.formatMessage({ id: 'popup.error.orderCreate.message' })}
            />
          </Modal>
        )}

        {openModal === FETCH_STATUS.SUCCESSED && (
          <Modal ariaTitle='Идентификатор заказа' handleClose={close}>
            <OrderDetails orderNumber={order.order.number} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
