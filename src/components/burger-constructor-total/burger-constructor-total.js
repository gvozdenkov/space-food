import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useState } from 'react';
import s from './burger-constructor-total.module.scss';
import clsx from 'clsx';
import { Price } from '../price';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import { OrderDetails } from '../order-details';
import { useIntl } from 'react-intl';
import { useFetchReducer } from '../../utils/hooks/useFetchReducer/useFetchReducer';
import { serverConfig } from '../../utils/config';

export const BurgerConstructorTotal = ({ totalPrice }) => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useFetchReducer(null);

  const fetchData = async (endpoint, options = {}) => {
    const abortController = new AbortController();

    dispatch({ type: 'FETCH' });

    try {
      const url = `${serverConfig.baseUrl}/${endpoint}`;
      const res = await fetch(url, {
        headers: serverConfig.headers,
        ...options,
        signal: abortController.signal,
      });

      if (!res.ok) {
        throw new Error(`Request Error ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      dispatch({ type: 'RESOLVE', data: data });
    } catch (err) {
      if (!abortController.signal.aborted) {
        dispatch({ type: 'REJECT', error: err });
      }
    }
  };

  const handleCreateOrder = () => {
    fetchData('orders', {
      method: 'POST',
      body: JSON.stringify(tmpBody),
    });
  };

  // const { data, error, loading } = useCreateOrder();
  const tmpBody = {
    ingredients: ['643d69a5c3f7b9001cfa093c', '643d69a5c3f7b9001cfa093c'],
  };

  return (
    <div className={clsx(s.burgerConstructorTotal, 'mt-10 pr-4')}>
      {<Price amount={totalPrice} size='medium' />}
      <Button
        type='primary'
        size='medium'
        htmlType='submit'
        extraClass='ml-10'
        onClick={handleCreateOrder}>
        {intl.formatMessage({ id: 'constructor.createOrder' })}
      </Button>
      {state.status === 'loading' ? <p>loading...</p> : undefined}
      {state.status === 'success' ? <p>{JSON.stringify(state.data.order.number)}</p> : undefined}
      {state.status === 'failure' ? <p>{JSON.stringify(state.error)}</p> : undefined}
      <Modal ariaTitle='Идентификатор заказа' open={isOpen} setOpen={setIsOpen}>
        <OrderDetails orderNumber={123456} />
      </Modal>
    </div>
  );
};

BurgerConstructorTotal.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
