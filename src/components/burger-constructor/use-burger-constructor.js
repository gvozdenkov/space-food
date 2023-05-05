import { useGetIngredientsQuery } from '../../features/api/api-slice';
import { INGREDIENT } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { ingredientAdded } from '../../features/burger-constructor/burger-constructor-slice';
import { LOCAL_STORAGE } from '../../utils/config';

export const useBurgerConstructor = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useGetIngredientsQuery();

  // if no bun in local storage - select random bun from ingredients and dispatch it
  if (!localStorage.getItem(LOCAL_STORAGE.CONSTRUCTOR_BUN)) {
    const buns = ingredients.data.filter((ingredient) => ingredient.type === INGREDIENT.BUN);
    const randomBun = buns[Math.floor(Math.random() * buns.length)];

    localStorage.setItem(LOCAL_STORAGE.CONSTRUCTOR_BUN, JSON.stringify(randomBun));

    dispatch(ingredientAdded(randomBun));
  }
};
