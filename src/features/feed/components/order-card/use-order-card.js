import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { ingredientsQuery } from '../../../../routes/root-layout/ingredients-loader';
import { ingredientIds, orderStatusIds } from '../../../../utils/config';

export const useOrderCard = ({ ingredientIds: orderIngredientsIds, status }) => {
  const { data: ingredientsCatalog } = useQuery(ingredientsQuery());

  const ingredients = useMemo(
    () => orderIngredientsIds.reduce((arr, id) => [...arr, ingredientsCatalog[id]], []),
    [orderIngredientsIds, ingredientsCatalog],
  );

  const isValid = useMemo(() => {
    const validIds = ingredients.every((element) => ingredientsCatalog[element?._id]);
    const validIngredientCount = ingredients.length > 2;
    const isBuns =
      ingredients[0]?.type === ingredientIds.BUN &&
      ingredients[ingredients.length - 1]?.type === ingredientIds.BUN;

    return validIds && validIngredientCount && isBuns;
  }, [ingredients, ingredientsCatalog]);

  const price = useMemo(
    () => ingredients.reduce((sum, item) => (sum += item?.price), 0),
    [ingredients],
  );

  const isDone = status === orderStatusIds.DONE;

  return { ingredients, isValid, price, isDone };
};
