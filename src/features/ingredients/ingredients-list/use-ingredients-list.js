import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useTabContext } from '../../../common/contexts/tab-context';
import { selectIngredients } from '../ingredients-slice';

export const useIngredientsList = () => {
  const ingredients = useSelector(selectIngredients);
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
