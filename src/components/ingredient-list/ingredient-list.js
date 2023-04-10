import clsx from 'clsx';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { IngredientCard } from '../ingredient-card';
import { useMemo } from 'react';

export const IngredientList = ({ ingredients }) => {
  const cards = useMemo(() => {
    return ingredients.map((ingredient) => {
      return (
        <li key={ingredient._id}>
          <IngredientCard ingredient={ingredient} />
        </li>
      );
    });
  }, [ingredients]);

  return <ul className={clsx(s.ingredientList, 'mb-10')}>{cards}</ul>;
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
