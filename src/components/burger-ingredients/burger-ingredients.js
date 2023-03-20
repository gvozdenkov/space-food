import clsx from 'clsx';
import { React } from 'react';
import { ingredientTypes } from '../../utils/data';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.css';

export const BurgerIngredients = (props) => {
  const { ingredients } = props;

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <TabList tabs={ingredientTypes} />
      <CategoryList types={ingredientTypes} ingredients={ingredients} />
    </section>
  );
};
