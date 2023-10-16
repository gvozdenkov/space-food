import { Link, useLocation } from 'react-router-dom';

import { clx } from '#shared/lib';
import { FeedCard } from '../feed-card/feed-card';
import { FeedOrder } from '#shared/api/types';

import s from './feed-list.module.scss';

type Props = {
  orders: FeedOrder[];
};

export const FeedList = ({ orders }: Props) => {
  const location = useLocation();

  return (
    <ul className={clx(s.feedList)}>
      {orders?.map((order, index) => {
        return (
          <li key={index} className={clx(s.feedList__item, 'mb-6 pr-2')}>
            <Link to={`${order.number}`} state={{ from: location }} className='reset-link'>
              <FeedCard {...order} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
