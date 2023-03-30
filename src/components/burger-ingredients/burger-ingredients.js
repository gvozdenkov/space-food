import clsx from 'clsx';
import { React } from 'react';
import { ingredientPropTypes, ingredientTypes } from '../../utils/config';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.css';
import PropTypes from 'prop-types';

export const BurgerIngredients = ({ ingredients }) => {
  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <TabList tabs={ingredientTypes} />
      <CategoryList types={ingredientTypes} ingredients={ingredients} />
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};
