import clsx from 'clsx';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { IngredientCard } from '../ingredient-card';
import { memo } from 'react';

export const IngredientList = memo(({ ingredients }) => {
  return (
    <ul className={clsx(s.ingredientList, 'mb-10')}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <IngredientCard ingredient={ingredient} />
          </li>
        );
      })}
    </ul>
  );
});

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
