import { useTranslation } from 'react-i18next';

// import { orderStatusTitle } from '../../../../utils/config';
import { IngredientIconList } from '../ingredient-icon-list/ingredient-icon-list';
import { clx } from '#shared/lib';
import { Price } from '#shared/ui/price';
import { useFeedCard } from './use-feed-card';

import s from './feed-card.module.scss';
import { OrderStatus } from '#shared/config/const';
import { FormattedDate } from '#shared/ui';

type Props = {
  ingredients: string[];
  name: string;
  status: OrderStatus;
  number: number;
  createdAt: string;
};

export const FeedCard = ({
  ingredients: ingredientIds,
  name,
  status,
  number,
  createdAt,
}: Props) => {
  const { t } = useTranslation();
  const { ingredients, isValid, price, isDone } = useFeedCard({ ingredientIds, status });

  return (
    isValid && (
      <article className={s.card}>
        <p className={clx('text text_type_digits-default', s.number)}>#{number}</p>
        <h2 className={clx('text text_type_main-medium', s.title)}>{name}</h2>
        <p className={clx('text text_type_main-default', s.status, { [s.status_success]: isDone })}>
          {/* {t(orderStatusTitle[status])} */}
        </p>
        <IngredientIconList ingredients={ingredients} maxVisible={6} extraClass={s.icons} />
        <Price price={price} size='default' extraClass={s.price} />
        <FormattedDate
          date={new Date(createdAt)}
          className={clx(s.date, 'text text_type_main-default  text_color_inactive')}
        />
      </article>
    )
  );
};
