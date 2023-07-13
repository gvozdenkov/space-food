import clsx from 'clsx';
import { Price } from '../../../../components/price';
import { CircleIcon } from '../circle-icon';
import s from './ingredient-row.module.scss';

export const IngredientRow = ({ img, name, count, price }) => {
  return (
    <li className={s.row}>
      <CircleIcon img={img} />
      <p className={clsx(s.name, 'text text_type_main-default')}>{name}</p>
      <span className={clsx(s.price, 'text text_type_digits-default')}>{count}&nbsp;x&nbsp;</span>
      <Price amount={price} />
    </li>
  );
};
