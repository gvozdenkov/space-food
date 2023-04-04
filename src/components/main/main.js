import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { useContext } from 'react';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';

export const Main = () => {
  const ingredients = useContext(IngredientContext);
  return (
    <main className={s.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};