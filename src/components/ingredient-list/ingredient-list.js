import clsx from 'clsx';
import React from 'react';
import { IngredientItem } from '../ingredient/ingredient-item';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';

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
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};
