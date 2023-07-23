import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './order-card.module.scss';
import { IngredientIcons } from '../ingredient-icons';
import { Price } from '../../../../components/price';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { orderStatusTitle } from '../../../../utils/config';
import { useOrderCard } from './use-order-card';

export const OrderCard = ({ ingredients: ingredientIds, name, status, number, createdAt }) => {
  const { t } = useTranslation();
  const { ingredients, isValid, price, isDone } = useOrderCard({ ingredientIds, status });

  return (
    isValid && (
      <article className={clsx(s.card, 'p-6')}>
        <p className={clsx('text text_type_digits-default', s.number)}>#{number}</p>
        <h2 className={clsx('text text_type_main-medium', s.title)}>{name}</h2>
        <p
          className={clsx('text text_type_main-default', s.status, { [s.status_success]: isDone })}>
          {t(orderStatusTitle[status])}
        </p>
        <IngredientIcons ingredients={ingredients} maxVisible={6} extraClass={s.icons} />
        <Price amount={price} extraClass={s.price} />
        <FormattedDate
          date={new Date(createdAt)}
          className={clsx(s.date, 'text text_type_main-default  text_color_inactive')}
        />
      </article>
    )
  );
};
