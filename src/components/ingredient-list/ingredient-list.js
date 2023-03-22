import clsx from 'clsx';
import React from 'react';
import { IngredientItem } from '../ingredient/ingredient-item';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';

export const IngredientList = ({ ingredients }) => {
  return (
    <ul className={clsx(s.ingredientList, 'mb-10')}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <IngredientItem ingredientData={ingredient} />
          </li>
        );
      })}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
};
