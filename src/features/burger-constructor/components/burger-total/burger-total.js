import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import s from './burger-total.module.scss';
import clsx from 'clsx';
import { Price } from '../../../../components/price';
import { Modal } from '../../../../components/modal';
import { OrderDetails } from './components/order-details';
import { AnimatePresence } from 'framer-motion';
import { useBurgerTotal } from './hooks/use-burger-total';
import { useTranslation } from 'react-i18next';
import { Form, useActionData, useNavigation } from 'react-router-dom';
import { ButtonLoader } from '../../../../components/button-loader';
import { useSelector } from 'react-redux';
import { selectAllOrderItems } from '../../services/order-slice';
import { ErrorMessage } from '../../../../components/error-message';

export const BurgerTotal = (props) => {
  const { t } = useTranslation();
  const { isMinimalOrder, totalPrice } = useBurgerTotal();
  const ingredients = useSelector(selectAllOrderItems);

  const order = useActionData();
  const isSuccess = order?.success;

  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <div className={clsx(s.burgerTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size='medium' />}
      <Form method='POST'>
        <input
          type='hidden'
          id='ingredients'
          name='ingredients'
          value={JSON.stringify(ingredients)}
        />
        <Button
          type='primary'
          size='medium'
          htmlType='submit'
          extraClass={clsx('ml-10')}
          disabled={isLoading || !isMinimalOrder}>
          {isLoading ? <ButtonLoader /> : t('constructor.createOrder')}
        </Button>
      </Form>

      {props.outlet && <ErrorMessage message={props.outlet} extraClass='mt-8' />}

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {isSuccess && (
          <Modal ariaTitle='Идентификатор заказа'>
            <OrderDetails number={order.order.number} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};
