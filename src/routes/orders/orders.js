import clsx from 'clsx';
import s from './orders.module.scss';
import { useTranslation } from 'react-i18next';
import { OrderCard } from '../../features/order-feed';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useWebSocket } from '../../hooks/use-websocet';
import { QUERYKEY } from '../../utils/config';
import { useQuery } from '@tanstack/react-query';

export const ordersQuery = () => ({
  queryKey: [QUERYKEY.PROFILE_ORDERS],
  queryFn: async () => {
    return Promise.resolve({
      success: true,
      orders: [],
      total: 0,
      totalToday: 0,
    });
  },
});

export const ordersLoader = (queryClient) => async () =>
  await queryClient.ensureQueryData(ordersQuery());

export const Orders = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const url = 'wss://norma.nomoreparties.space/orders';
  useWebSocket({ url });

  const { data: ordersData } = useQuery(ordersQuery());
  const { orders } = ordersData;

  return (
    <>
      <section className={clsx(s.orders)}>
        <ul className={clsx(s.orderList, 'customScroll')}>
          {orders?.map((order, index) => {
            return (
              <li key={index} className={clsx(s.orderItem, 'mb-6')}>
                <Link to={`${order.number}`} state={{ from: location }} className='reset-link'>
                  <OrderCard {...order} />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.orders.comment')}
      </p>

      <Outlet />
    </>
  );
};
