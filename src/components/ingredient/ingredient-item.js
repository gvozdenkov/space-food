import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import React from 'react';
import { getIcons } from '../../utils';
import s from './ingredient-item.module.css';

export const IngredientItem = ({ ingredientData, count }) => {
  return (
    <article className={s.ingredientItem}>
      {count && (
        <Counter count={count} size="default" extraClass={clsx(s.ingredientItem__counter)} />
      )}
      <img src={ingredientData.image} alt={ingredientData.name} />
      <span className={clsx(s.ingredientItem__price, 'text text_type_digits-default')}>
        {ingredientData.price} {getIcons('primary')['currency']}
      </span>
      <p className={clsx(s.ingredientItem__title, 'text text_type_main-default')}>
        {ingredientData.name}
      </p>
    </article>
  );
};
