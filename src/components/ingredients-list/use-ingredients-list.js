import { useMemo } from 'react';
import { useGetIngredientsQuery } from '../../services/api-slice';
import { useTabContext } from '../../common/contexts/tab-context';

export const useIngredientsList = () => {
  const { data: ingredients } = useGetIngredientsQuery();
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
            ingredients: ingredients.data.filter((ingredient) => ingredient.type === tab.type),
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
