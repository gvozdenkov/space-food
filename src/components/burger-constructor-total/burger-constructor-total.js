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
import { useCartContext } from '../../common/contexts/CartContext/CartContext';
import { useOrderDispatchContext } from '../../common/contexts/OrderContext';
import { FETCH_STATUS } from '../../utils/constants';
import { AnimatePresence } from 'framer-motion';
import { useFetchReducer } from '../../common/hooks/useFetchReducer';

export const BurgerConstructorTotal = () => {
  const intl = useIntl();
  const { state, dispatch, fetchData } = useFetchReducer();

  const { addOrder } = useOrderDispatchContext();
  const { cart, totalPrice } = useCartContext();

  const ingredients = [cart.buns[0], ...cart.ingredients, cart.buns[1]].map((item) => item._id);

  const isLoading = state.status === FETCH_STATUS.LOADING;
  const isSuccess = state.status === FETCH_STATUS.SUCCESSED;
  const isFail = state.status === FETCH_STATUS.FAILED;

  const [openModal, setOpenModal] = useState(null);

  const close = () => setOpenModal(null);

  const handleCreateOrder = () => {
    fetchData({
      endpoint: 'orders',
      options: {
        method: 'POST',
        body: JSON.stringify({ ingredients }),
      },
      dispatch,
    });
  };

  useEffect(() => {
    if (isFail) setOpenModal(FETCH_STATUS.FAILED);
    if (isLoading) setOpenModal(FETCH_STATUS.LOADING);
    if (isSuccess) {
      setOpenModal(FETCH_STATUS.SUCCESSED);
      addOrder(state.data.order.number);
    }
  }, [isFail, isLoading, isSuccess]);

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
              error={state.error.message}
              message={intl.formatMessage({ id: 'popup.error.orderCreate.message' })}
            />
          </Modal>
        )}

        {openModal === FETCH_STATUS.SUCCESSED && (
          <Modal ariaTitle='Идентификатор заказа' handleClose={close}>
            <OrderDetails orderNumber={state.data.order.number} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
