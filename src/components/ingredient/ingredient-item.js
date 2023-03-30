import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import React from 'react';
import { Price } from '../price';
import s from './ingredient-item.module.css';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';

export const IngredientItem = ({ ingredientData }) => {
  return (
    <article className={s.ingredientItem}>
      {true && <Counter count={2} size="default" extraClass={clsx(s.ingredientItem__counter)} />}
      <img src={ingredientData.image} alt={ingredientData.name} />
      {<Price amount={ingredientData.price} />}
      <p className={clsx(s.ingredientItem__title, 'text text_type_main-default')}>
        {ingredientData.name}
      </p>
    </article>
  );
};

IngredientItem.propTypes = {
  ingredientData: ingredientPropTypes,
};
