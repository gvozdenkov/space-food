import clsx from 'clsx';
import { React } from 'react';
import { ingredientTypes } from '../../utils/config';
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
