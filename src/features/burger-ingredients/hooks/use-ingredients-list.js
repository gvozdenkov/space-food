import { useMemo } from 'react';
import { useTabContext } from '../context/tab-context';
import { useQuery } from '@tanstack/react-query';
import { ingredientTabs } from '../../../utils/config';
import { ingredientsQuery } from '../../../routes/root-layout/ingredients-loader';

export const useIngredientsList = () => {
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const { tabs } = useTabContext();

  const keys = Object.keys(ingredientsObj);
  const ingredients = keys.reduce((arr, key) => {
    arr.push(ingredientsObj[key]);
    return arr;
  }, []);

  // Return array of objects with this shape:
  // [
  //    { ingredients: [], text: 'Булки', type: 'bun' },
  //    { ingredients: [], text: 'Начинки', type: 'main' },
  //    { ingredients: [], text: 'Соусы', type: 'sauce' },
  // ]
  const categorys = useMemo(
    () =>
      tabs.reduce(
        (o, tab) => [
          ...o,
          {
            ingredients: ingredients.filter((ingredient) => ingredient.type === tab),
            text: ingredientTabs[tab],
            type: tab,
          },
        ],
        [],
      ),
    [ingredients, tabs],
  );

  return { categorys };
};
