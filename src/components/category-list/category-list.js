import clsx from 'clsx';
import React from 'react';
import { IngredientList } from '../ingredient-list';
import s from './category-list.module.scss';
import scroll from '../../styles/blocks/customScroll/customScroll.module.scss';

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
