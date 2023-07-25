import clsx from 'clsx';
import s from './orders.module.scss';
import { useTranslation } from 'react-i18next';
import { OrdersList, OrdersListSkeleton, useFeed } from '../../features/feed';
import { Outlet } from 'react-router-dom';
import { QUERYKEY } from '../../utils/config';
import { ordersQuery } from './orders-loader';

export const Orders = () => {
  const { t } = useTranslation();

  const url = 'wss://norma.nomoreparties.space/orders';
  const querykeys = [QUERYKEY.PROFILE_ORDERS];

  const { orders, isLoading } = useFeed({ url, useToken: true, querykeys, query: ordersQuery });

  const isOrderListEmpty = orders.length === 0;

  return (
    <>
      <section className={clsx(s.orders, { [s.orders_empty]: isOrderListEmpty && !isLoading })}>
        {isLoading ? (
          <OrdersListSkeleton />
        ) : isOrderListEmpty ? (
          <p className='text text_color_inactive text_type_main-medium'>
            {t('profile.orders.empty')}
          </p>
        ) : (
          <div className={clsx(s.wrapper, 'customScroll')}>
            <OrdersList orders={orders} />
          </div>
        )}
      </section>

      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.orders.comment')}
      </p>

      <Outlet />
    </>
  );
};
