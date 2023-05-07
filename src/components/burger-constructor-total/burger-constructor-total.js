import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { useIntl } from 'react-intl';
import { CheckoutOrderDetails } from '../checkout-order-details';
import { ErrorModalDetails } from '../error-modal-details';
import { FETCH_STATUS } from '../../utils/constants';
import { AnimatePresence } from 'framer-motion';
import { useBurgerTotal } from './use-burger-total';

export const BurgerConstructorTotal = () => {
  const intl = useIntl();
  const {
    order,
    isMinimalOrder,
    totalPrice,
    isLoading,
    error,
    handleCreateOrder,
    openModal,
    closeModal,
  } = useBurgerTotal();

  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size='medium' />}

      <Button
        type='primary'
        size='medium'
        htmlType='submit'
        extraClass={clsx({ ellipsis: isLoading }, 'ml-10')}
        onClick={handleCreateOrder}
        disabled={isLoading || !isMinimalOrder}>
        {isLoading
          ? intl.formatMessage({ id: 'constructor.createOrder.loading' })
          : intl.formatMessage({ id: 'constructor.createOrder' })}
      </Button>

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {openModal === FETCH_STATUS.LOADING && (
          <Modal
            title={intl.formatMessage({ id: 'constructor.createOrder.loading' })}
            handleClose={closeModal}>
            <CheckoutOrderDetails />
          </Modal>
        )}

        {openModal === FETCH_STATUS.FAILED && (
          <Modal
            title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
            handleClose={closeModal}>
            <ErrorModalDetails
              error={error}
              message={intl.formatMessage({ id: 'popup.error.orderCreate.message' })}
            />
          </Modal>
        )}

        {openModal === FETCH_STATUS.SUCCESSED && (
          <Modal ariaTitle='Идентификатор заказа' handleClose={closeModal}>
            <OrderDetails orderNumber={order.order.number} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
