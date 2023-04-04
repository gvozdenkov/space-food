import clsx from 'clsx';
import { ingredientPropTypes, ingredientTypes } from '../../utils/config';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.scss';
import PropTypes from 'prop-types';

export const BurgerIngredients = ({ ingredients }) => {
  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <TabList tabs={ingredientTypes} />
      <CategoryList ingredients={ingredients} types={ingredientTypes} />
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
