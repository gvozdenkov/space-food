import clsx from 'clsx';
import s from './orders.module.scss';
import { useTranslation } from 'react-i18next';
import { OrderCard } from '../../features/order-feed';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const orders = [
  {
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa093e',
      '643d69a5c3f7b9001cfa094a',
      '643d69a5c3f7b9001cfa093c',
    ],
    _id: '',
    status: 'done',
    number: '132165',
    name: 'Супер пупер бургер 1',
    createdAt: '2023-07-10T10:11:01.403Z',
    updatedAt: '2023-07-10T10:11:01.406Z',
  },
  {
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0945',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0947',
      '643d69a5c3f7b9001cfa0948',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0948',
      '643d69a5c3f7b9001cfa093d',
    ],
    _id: '',
    status: 'pending',
    number: '65123',
    name: 'Супер пупер бургер 2',
    createdAt: '2023-07-09T20:15:01.403Z',
    updatedAt: '2023-07-09T20:15:01.406Z',
  },
  {
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa093e',
      '643d69a5c3f7b9001cfa094a',
      '643d69a5c3f7b9001cfa093c',
    ],
    _id: '',
    status: 'done',
    number: '4567',
    name: 'Супер пупер бургер 3',
    createdAt: '2023-07-10T10:11:01.403Z',
    updatedAt: '2023-07-10T10:11:01.406Z',
  },
  {
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0945',
      '643d69a5c3f7b9001cfa0946',
      '643d69a5c3f7b9001cfa0947',
      '643d69a5c3f7b9001cfa0948',
      '643d69a5c3f7b9001cfa0940',
      '643d69a5c3f7b9001cfa0948',
      '643d69a5c3f7b9001cfa093d',
    ],
    _id: '',
    status: 'pending',
    number: '2345',
    name: 'Супер пупер бургер 4',
    createdAt: '2023-07-09T20:15:01.403Z',
    updatedAt: '2023-07-09T20:15:01.406Z',
  },
];

export const Orders = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <>
      <section className={clsx(s.orders)}>
        <ul className={clsx(s.orderList, 'customScroll')}>
          {orders.map((order, index) => {
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
