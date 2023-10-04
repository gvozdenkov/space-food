import { useMemo } from 'react';
import { useGetIngredientsQuery } from '#widgets/burger-ingredients';
import { orderStatus } from '#shared/config';
import { Ingredients } from '#api/ingredients.types';

type Props = {
  ingredientIds: string[];
  status: typeof orderStatus;
};

export const useFeedCard = ({ ingredientIds: orderIngredientsIds, status }: Props) => {
  const { data: ingredientsData } = useGetIngredientsQuery();
  const ingredientsCatalog = ingredientsData!.ingredientsObj;

  const ingredients = useMemo(
    () =>
      orderIngredientsIds.reduce<Ingredients>((arr, id) => [...arr, ingredientsCatalog[id]], []),
    [orderIngredientsIds, ingredientsCatalog],
  );

  const isValid = useMemo(() => {
    const validIds = ingredients.every((element) => ingredientsCatalog[element?._id]);
    const validIngredientCount = ingredients.length > 2;
    const isBuns =
      ingredients[0]?.type === 'bun' && ingredients[ingredients.length - 1]?.type === 'bun';

    return validIds && validIngredientCount && isBuns;
  }, [ingredients, ingredientsCatalog]);

  const price = useMemo(
    () => ingredients.reduce((sum, item) => (sum += item?.price), 0),
    [ingredients],
  );

  const isDone = status === orderStatus.DONE;

  return { ingredients, isValid, price, isDone };
};
