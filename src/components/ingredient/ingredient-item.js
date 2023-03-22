import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import React from 'react';
import { Price } from '../price';
import s from './ingredient-item.module.css';
import PropTypes from 'prop-types';

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
  ingredientData: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }),
};
