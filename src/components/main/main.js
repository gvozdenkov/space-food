import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { useContext, useState } from 'react';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';
import { IngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';

export const Main = () => {
  const ingredients = useContext(IngredientContext);

  const setIngredient = (ingr) => {
    setSelectedIngredient({ ingredient: ingr, setIngredient });
  };

  const [selectedIngredient, setSelectedIngredient] = useState({
    ingredient: {},
    setIngredient,
  });

  return (
    <IngredientSelectedContext.Provider value={selectedIngredient}>
      <main className={s.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </IngredientSelectedContext.Provider>
  );
};
