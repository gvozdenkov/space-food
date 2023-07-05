import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './burger-total.module.scss';
import clsx from 'clsx';
import { Price } from '../../../../components/price';
import { Modal } from '../../../../components/modal';
import { OrderDetails } from './components/order-details';
import { CheckoutOrderDetails } from './components/checkout-order-details';
import { FETCH_STATUS } from '../../../../utils/constants';
import { AnimatePresence } from 'framer-motion';
import { useBurgerTotal } from './hooks/use-burger-total';
import { useTranslation } from 'react-i18next';
import { Form, useNavigation } from 'react-router-dom';
import { ButtonLoader } from '../../../../components/button-loader';

export const BurgerTotal = () => {
  const { t } = useTranslation();
  const { order, isMinimalOrder, handleCreateOrder, totalPrice, openModal, closeModal } =
    useBurgerTotal();

  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <div className={clsx(s.burgerTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size='medium' />}
      <Form>
        <Button
          type='primary'
          size='medium'
          htmlType='submit'
          extraClass={clsx('ml-10')}
          onClick={handleCreateOrder}
          disabled={isLoading || !isMinimalOrder}>
          {isLoading ? <ButtonLoader /> : t('constructor.createOrder')}
        </Button>
      </Form>

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {openModal === isLoading && (
          <Modal title={t('constructor.createOrder.loading')} handleClose={closeModal}>
            <CheckoutOrderDetails />
          </Modal>
        )}

        {openModal === FETCH_STATUS.SUCCESSED && (
          <Modal ariaTitle='Идентификатор заказа' handleClose={closeModal}>
            <OrderDetails orderNumber={456321} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
