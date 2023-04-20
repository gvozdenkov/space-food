import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { useIntl } from 'react-intl';
import { useFetchReducer } from '../../utils/hooks/useFetchReducer/useFetchReducer';
import { CheckoutOrderDetails } from '../CheckoutOrderDetails';
import { ErrorModalDetails } from '../ErrorModalDetails';
import { useCartContext } from '../../utils/contexts/CartContext/CartContext';
import { useOrderDispatchContext } from '../../utils/contexts/OrderContext';

export const BurgerConstructorTotal = ({ totalPrice }) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch, fetchData } = useFetchReducer();

  const isLoading = state.status === 'loading';
  const isSuccess = state.status === 'success';
  const isFail = state.status === 'fail';

  const { addOrder } = useOrderDispatchContext();

  const cart = useCartContext();
  const ingredients = cart.cartItems.map((item) => item._id);

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
    if (isFail) setIsOpen(true);
  }, [isFail]);

  useEffect(() => {
    if (isLoading) setIsOpen(true);
  }, [isLoading]);

  useEffect(() => {
    if (isSuccess) {
      addOrder(state.data.order.number);
    }
  }, [isSuccess]);

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

      {isLoading && (
        <Modal
          title={intl.formatMessage({ id: 'constructor.createOrder.loading' })}
          open={isOpen}
          setOpen={setIsOpen}>
          <CheckoutOrderDetails />
        </Modal>
      )}

      {isFail && (
        <Modal
          title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
          open={isOpen}
          setOpen={setIsOpen}>
          <ErrorModalDetails
            error={state.error.message}
            message={intl.formatMessage({ id: 'popup.error.orderCreate.message' })}
          />
        </Modal>
      )}

      {isSuccess && (
        <Modal ariaTitle='Идентификатор заказа' open={isOpen} setOpen={setIsOpen}>
          <OrderDetails orderNumber={state.data.order.number} />
        </Modal>
      )}
    </div>
  );
};

BurgerConstructorTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
