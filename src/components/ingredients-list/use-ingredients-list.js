import { useMemo } from 'react';
import { selectAllIngredients } from '../../services/api/ingredients-api';
import { useTabContext } from '../../common/contexts/tab-context';
import { useSelector } from 'react-redux';

export const useIngredientsList = () => {
  const ingredients = useSelector(selectAllIngredients);
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
