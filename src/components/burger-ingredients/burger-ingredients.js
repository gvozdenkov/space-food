import clsx from 'clsx';
import { ingredientTypes } from '../../utils/config';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.scss';

export const BurgerIngredients = () => {
  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <TabList tabs={ingredientTypes} />
      <CategoryList types={ingredientTypes} />
    </section>
  );
};
