import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { OrderCard } from '../order-card';
import { OrderCardSkeleton } from '../order-card/order-card-skeleton';
import s from './order-list.module.scss';

export const OrdersList = ({ orders }) => {
  const location = useLocation();

  return (
    <ul className={clsx(s.orderList)}>
      {orders?.map((order, index) => {
        return (
          <li key={index} className={clsx(s.orderItem, 'mb-6 pr-2')}>
            <Link to={`${order.number}`} state={{ from: location }} className='reset-link'>
              <OrderCard {...order} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const OrdersListSkeleton = () => {
  return (
    <ul className={clsx(s.orderList, 'customScroll')}>
      {[...Array(10).keys()].map((_, index) => {
        return (
          <li key={index} className={clsx(s.orderItem, 'mb-6 pr-2')}>
            <OrderCardSkeleton />
          </li>
        );
      })}
    </ul>
  );
};
