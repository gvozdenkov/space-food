import clsx from 'clsx';
import s from './feed.module.scss';
import { useTranslation } from 'react-i18next';
import { OrderCard, useFeed } from '../../features/feed';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { QUERYKEY, showMaximumOrders } from '../../utils/config';
import { orderFeedQuery } from './feed-loader';

export const Feed = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const url = 'wss://norma.nomoreparties.space/orders/all';
  const querykeys = [QUERYKEY.FEED];

  const { orders, total, totalToday, doneOrders, pendingOrders } = useFeed({
    url,
    querykeys,
    query: orderFeedQuery,
  });

  const OrderList = ({ orders, extraClass = '' }) => {
    return (
      <ul className={clsx(s.list, `text text_type_digits-default ${extraClass}`)}>
        {orders.slice(0, showMaximumOrders).map((order, index) => (
          <li className={clsx(s.listItem)} key={index}>
            {order.number}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={s.orderFeed}>
      <section className={clsx(s.orders)}>
        <h1 className='text text_type_main-large mt-10 mb-5'>{t('orderFeed.title')}</h1>
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

      <section className={clsx(s.statistics, 'mt-25')}>
        <h2 className={clsx(s.done, 'text text_type_main-medium')}>{t('orderFeed.doneTitle')}</h2>
        <OrderList orders={doneOrders} extraClass={clsx(s.doneList, 'text_color_success')} />
        <h2 className={clsx(s.pending, 'text text_type_main-medium')}>
          {t('orderFeed.pendingTitle')}
        </h2>
        <OrderList orders={pendingOrders} extraClass={clsx(s.pendingList, 'text_color_success')} />
        <h2 className={clsx(s.totalTitle, 'text text_type_main-medium')}>
          {t('orderFeed.totalTitle')}
        </h2>
        <span className={clsx(s.total, 'text text_type_digits-large')}>{total}</span>
        <h2 className={clsx(s.totalTodayTitle, 'text text_type_main-medium')}>
          {t('orderFeed.totalTodayTitle')}
        </h2>
        <span className={clsx(s.totalToday, 'text text_type_digits-large')}>{totalToday}</span>
      </section>

      <Outlet />
    </div>
  );
};
