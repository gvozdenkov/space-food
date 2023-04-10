import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { createContext, useState } from 'react';
import { IngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';
import { Modal } from '../modal';
import { useIntl } from 'react-intl';
import { IngredientDetails } from '../IngredientDetails';
import { ConstructorContext, ConstructorProvider } from '../../utils/contexts/ConstructorContext';

const initialConstructorState = {
  constructorIngredients: [
    {
      _id: '60666c42cc7b410027a1a9b1',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0,
    },
    {
      _id: '60666c42cc7b410027a1a9b5',
      name: 'Говяжий метеорит (отбивная)',
      type: 'main',
      proteins: 800,
      fat: 800,
      carbohydrates: 300,
      calories: 2674,
      price: 3000,
      image: 'https://code.s3.yandex.net/react/code/meat-04.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
      __v: 0,
    },
    {
      _id: '60666c42cc7b410027a1a9b1',
      name: 'Краторная булка N-200i',
      type: 'bun',
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: 'https://code.s3.yandex.net/react/code/bun-02.png',
      image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
      image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
      __v: 0,
    },
  ],
  selectedIngredient: {},
  totalPrice: 0,
};
const ConstructorActions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
};

const ConstructorReducer = (state, action) => {
  switch (action.type) {
    case action.ADD_INGREDIENT:
      return { ...state.constructorIngredients, constructorIngredients: action.ingredient };

    default:
      return state;
  }
};

export const Main = () => {
  const intl = useIntl();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedIngredient, setSelectedIngredient] = useState({});

  return (
    <section className={s.main}>
      <ConstructorProvider>
        <BurgerIngredients />
        <BurgerConstructor />
      </ConstructorProvider>
    </section>
  );
};
