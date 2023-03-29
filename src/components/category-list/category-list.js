import clsx from 'clsx';
import React from 'react';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import scroll from '../../styles/blocks/customScroll/customScroll.module.scss';
import PropTypes from 'prop-types';

export const CategoryList = ({ types, ingredients }) => {
  return (
    <ul className={clsx(s.categoryList, scroll.customScroll)}>
      {types.map((type, index) => {
        const ingredientsFilterd = ingredients.filter(
          (ingredient) => ingredient.type === type.type
        );

        return (
          <li key={index}>
            <h2 className="text text_type_main-medium mb-6">{type.text}</h2>
            <IngredientList ingredients={ingredientsFilterd} />
          </li>
        );
      })}
    </ul>
  );
};

CategoryList.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['bun', 'main', 'sauce']),
      text: PropTypes.string,
    })
  ).isRequired,

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
