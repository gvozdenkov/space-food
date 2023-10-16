import { clx } from '#shared/lib';
import { showMaximumOrders } from '../config/const';

import s from './order-number-list.module.scss';

type Props = {
  orders: {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
  }[];
  extraClass?: string;
};

export const OrderNumberList = ({ orders, extraClass = '' }: Props) => {
  return (
    <ul className={clx(s.orderNumberList, `text text_type_digits-default ${extraClass}`)}>
      {orders.slice(0, showMaximumOrders).map((order, index) => (
        <li className={clx(s.orderNumberList__item)} key={index}>
          {order.number}
        </li>
      ))}
    </ul>
  );
};
