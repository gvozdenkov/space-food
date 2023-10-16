import { useTranslation } from 'react-i18next';

import { clx } from '#shared/lib';
import { FormattedDate } from '#shared/ui';
import { Price } from '#shared/ui/price';
import { useOrderDetails } from './use-feed-card-details';
import { IngredientRow } from './ingredient-row';
import { Order } from '../../types';

import s from './feed-card-details.module.scss';

export const FeedCardDetails = ({ order, extraClass }: Order) => {
  const { t } = useTranslation();
  const { ingredientIds, ingredients, totalPrice, orderDate, isDone } = useOrderDetails({
    order,
  });

  return (
    <section className={clx(s.order, extraClass)}>
      <h1 className={clx(s.title, 'text text_type_main-medium')}>{order.name}</h1>
      <span
        className={clx('text text_type_main-default', s.status, { text_color_success: isDone })}>
        {t(`feed.order.status.${order.status}`)}
      </span>
      <h2 className={clx(s.listTitle, 'text text_type_main-medium')}>
        {t('feed.order.modal.listTitle')}:
      </h2>
      <ul className={clx(s.list, 'customScroll')}>
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
        className={clx(s.date, 'text text_type_main-default text_color_inactive')}
      />
      <Price price={totalPrice} size='default' extraClass={clx(s.price, 'mr-8')} />
    </section>
  );
};
