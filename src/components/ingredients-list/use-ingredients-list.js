import { useMemo } from 'react';
import { useTabContext } from '../../common/contexts/tab-context';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../routes/main/main-loader';

export const useIngredientsList = () => {
  const { queryKey, queryFn } = ingredientsQuery();
  const { data: ingredientsObj } = useQuery({
    queryKey,
    queryFn,
    refetchOnMount: false,
  });

  const keys = Object.keys(ingredientsObj);
  const ingredients = keys.reduce((arr, key) => {
    arr.push(ingredientsObj[key]);
    return arr;
  }, []);
  const { tabs } = useTabContext();

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
            ingredients: ingredients.filter((ingredient) => ingredient.type === tab.type),
            text: tab.text,
            type: tab.type,
          },
        ],
        [],
      ),
    [ingredients, tabs],
  );

  return { categorys };
};
