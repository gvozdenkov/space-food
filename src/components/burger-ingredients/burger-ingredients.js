import clsx from 'clsx';
import { React } from 'react';
import { ingredientPropTypes, ingredientTypes } from '../../utils/config';
import { CategoryList } from '../category-list/category-list';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.css';
import PropTypes from 'prop-types';
import { Modal } from '../modal';
import { IngredientDetails } from '../IngredientDetails';

export const BurgerIngredients = ({ ingredients }) => {
  const ingredient = {
    _id: '60666c42cc7b410027a1a9b6',
    name: 'Биокотлета из марсианской Магнолии',
    type: 'main',
    proteins: 420,
    fat: 142,
    carbohydrates: 242,
    calories: 4242,
    price: 424,
    image: 'https://code.s3.yandex.net/react/code/meat-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-01-large.png',
    __v: 0,
  };

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h2 className="text text_type_main-large">Соберите бургер</h2>
      <TabList tabs={ingredientTypes} />
      <CategoryList types={ingredientTypes} ingredients={ingredients} />
      <Modal title="Детали ингредиента" open={false}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes),
};
