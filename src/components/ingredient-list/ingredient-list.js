import clsx from 'clsx';
import React from 'react';
import { IngredientItem } from '../ingredient/ingredient-item';
import s from './ingredient-list.module.scss';

export const IngredientList = ({ ingredients }) => {
  return (
    <ul className={clsx(s.ingredientList)}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <IngredientItem ingredientData={ingredient} count={1} />
          </li>
        );
      })}
    </ul>
  );
};
