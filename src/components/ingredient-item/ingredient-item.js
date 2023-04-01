import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import { useState } from 'react';
import { Price } from '../price';
import s from './ingredient-item.module.scss';
import { ingredientPropTypes } from '../../utils/config';
import { Modal } from '../modal';
import { IngredientDetails } from '../IngredientDetails';

export const IngredientItem = ({ ingredient }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState({
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
  });
  return (
    <>
      <article
        className={s.ingredientItem}
        onClick={() => {
          setSelectedIngredient(ingredient);
          setIsOpen(true);
        }}
      >
        {true && <Counter count={2} size="default" extraClass={clsx(s.ingredientItem__counter)} />}
        <img src={ingredient.image} alt={ingredient.name} />
        {<Price amount={ingredient.price} />}
        <p className={clsx(s.ingredientItem__title, 'text text_type_main-default')}>
          {ingredient.name}
        </p>
      </article>

      <Modal title="Детали ингредиента" open={isOpen} setOpen={setIsOpen}>
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
    </>
  );
};

IngredientItem.propTypes = {
  ingredientData: ingredientPropTypes,
};
