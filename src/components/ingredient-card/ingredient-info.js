import clsx from 'clsx';
import { Price } from '../price';
import s from './ingredient-info.module.scss';

export const IngredientInfo = ({ price, name }) => {
  return (
    <>
      {<Price amount={price} />}  
      <p className={clsx(s.title, 'text text_type_main-default')}>{name}</p>
    </>
  );
};
