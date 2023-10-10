import { clx } from '#shared/lib';
import { Price } from '#shared/ui/price';
import { IngredientIcon } from '../ingredient-icon/ingredient-icon';

import s from './ingredient-row.module.scss';

type Props = {
  img: string;
  name: string;
  count: number;
  price: number;
};

export const IngredientRow = ({ img, name, count, price }: Props) => {
  return (
    <li className={s.row}>
      <IngredientIcon img={img} />
      <p className={clx(s.name, 'text text_type_main-default')}>{name}</p>
      <span className={clx(s.price, 'text text_type_digits-default')}>{count}&nbsp;x&nbsp;</span>
      <Price price={price} size='default' />
    </li>
  );
};
