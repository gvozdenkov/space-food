import clsx from 'clsx';
import s from './order-detail.module.scss';
import { orderStatusTitle } from '../../../../utils/config';
import { useTranslation } from 'react-i18next';
import { IngredientRow } from '../ingredient-row/ingredient-row';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price } from '../../../../components/price';
import { useOrderDetails } from './use-order-details';

export const OrderDetails = ({ number, extraClass }) => {
  const { t } = useTranslation();
  const { order, ingredientIds, ingredients, orderDate, totalPrice, isDone } = useOrderDetails({
    number,
  });

  return (
    <section className={clsx(s.order, extraClass)}>
      <h1 className={clsx(s.title, 'text text_type_main-medium')}>{order.name}</h1>
      <span
        className={clsx('text text_type_main-default', s.status, { text_color_success: isDone })}>
        {t(orderStatusTitle[order.status])}
      </span>
      <h2 className={clsx(s.listTitle, 'text text_type_main-medium')}>
        {t('order.modal.listTitle')}
      </h2>
      <ul className={clsx(s.list, 'customScroll')}>
        {ingredientIds.map((id, i) => {
          const { ingredient, count } = ingredients[id];
          const { image_mobile, name, price } = ingredient;

          return (
            <IngredientRow img={image_mobile} name={name} count={count} price={price} key={i} />
          );
        })}
      </ul>
      <FormattedDate
        date={orderDate}
        className={clsx(s.date, 'text text_type_main-default text_color_inactive')}
      />
      <Price amount={totalPrice} extraClass={clsx(s.price, 'mr-8')} />
    </section>
  );
};
