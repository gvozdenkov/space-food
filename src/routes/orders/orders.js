import clsx from 'clsx';
import s from './orders.module.scss';
import { useTranslation } from 'react-i18next';
import { OrderCard } from '../../features/order-feed';

export const Orders = () => {
  const { t } = useTranslation();

  const orders = [
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
      number: '132165',
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
      createdAt: '2023-07-09T20:15:01.403Z',
      updatedAt: '2023-07-09T20:15:01.406Z',
    },
  ];

  return (
    <>
      <section className={clsx(s.orders)}>
        <ul className={clsx(s.orderList, 'customScroll')}>
          {orders.map((order, index) => {
            return (
              <li key={index} className={clsx(s.orderItem, 'mb-6')}>
                <OrderCard {...order} />
              </li>
            );
          })}
        </ul>
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.orders.comment')}
      </p>
    </>
  );
};
