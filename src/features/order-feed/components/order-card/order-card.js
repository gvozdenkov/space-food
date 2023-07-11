import clsx from 'clsx';
import s from './order-card.module.scss';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../routes/root-layout/ingredients-loader';
import { useMemo } from 'react';
import { IngredientIcons } from '../ingredient-icons';
import { Price } from '../../../../components/price';
import { FormattedDate } from '@ya.praktikum/react-developer-burger-ui-components';
import { orderStatusIds, orderStatusTitle } from '../../../../utils/config';
import { useTranslation } from 'react-i18next';

export const OrderCard = ({ ingredients: ingredientIds, status, number, createdAt }) => {
  const { data: ingredientsCatalog } = useQuery(ingredientsQuery());
  const { t } = useTranslation();
  const title = 'Death Star Starship Main бургер';

  const ingredients = useMemo(
    () => ingredientIds.reduce((arr, id) => [...arr, ingredientsCatalog[id]], []),
    [ingredientIds, ingredientsCatalog],
  );

  const price = useMemo(
    () => ingredients.reduce((sum, item) => (sum += item.price), 0),
    [ingredients],
  );

  const isDone = status === orderStatusIds.DONE;

  return (
    <article className={clsx(s.card, 'p-6')}>
      <p className={clsx('text text_type_digits-default', s.number)}>#{number}</p>
      <h2 className={clsx('text text_type_main-medium', s.title)}>{title}</h2>
      <p className={clsx('text text_type_main-default', s.status, { [s.status_success]: isDone })}>
        {t(orderStatusTitle[status])}
      </p>
      <IngredientIcons ingredients={ingredients} extraClass={s.icons} />
      <Price amount={price} extraClass={s.price} />
      <FormattedDate
        date={new Date(createdAt)}
        className={clsx(s.date, 'text text_type_main-default  text_color_inactive')}
      />
    </article>
  );
};
