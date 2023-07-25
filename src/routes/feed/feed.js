import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import s from './feed.module.scss';
import { OrdersList, OrdersListSkeleton, useFeed } from '../../features/feed';
import { QUERYKEY, showMaximumOrders } from '../../utils/config';
import { orderFeedQuery } from './feed-loader';

export const Feed = () => {
  const { t } = useTranslation();

  const url = 'wss://norma.nomoreparties.space/orders/all';
  const querykeys = [QUERYKEY.FEED];

  const { orders, total, totalToday, doneOrders, pendingOrders, isLoading } = useFeed({
    url,
    querykeys,
    query: orderFeedQuery,
  });

  const OrderNumberList = ({ orders, extraClass = '' }) => {
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
        <h1 className='text text_type_main-large mt-10 mb-5'>{t('feed.title')}</h1>
        <div className={clsx(s.wrapper, 'customScroll')}>
          {isLoading ? <OrdersListSkeleton /> : <OrdersList orders={orders} />}
        </div>
      </section>

      <section className={clsx(s.statistics, 'mt-25')}>
        {isLoading ? (
          <p className={clsx(s.loading, 'text text_type_main-default')}>loading...</p>
        ) : (
          <>
            <h2 className={clsx(s.done, 'text text_type_main-medium')}>{t('feed.doneTitle')}:</h2>
            <OrderNumberList
              orders={doneOrders}
              extraClass={clsx(s.doneList, 'text_color_success')}
            />
            <h2 className={clsx(s.pending, 'text text_type_main-medium')}>
              {t('feed.pendingTitle')}:
            </h2>
            <OrderNumberList
              orders={pendingOrders}
              extraClass={clsx(s.pendingList, 'text_color_success')}
            />
            <h2 className={clsx(s.totalTitle, 'text text_type_main-medium')}>
              {t('feed.totalTitle')}:
            </h2>
            <span className={clsx(s.total, 'text text_type_digits-large')}>{total}</span>
            <h2 className={clsx(s.totalTodayTitle, 'text text_type_main-medium')}>
              {t('feed.totalTodayTitle')}:
            </h2>
            <span className={clsx(s.totalToday, 'text text_type_digits-large')}>{totalToday}</span>
          </>
        )}
      </section>

      <Outlet />
    </div>
  );
};
