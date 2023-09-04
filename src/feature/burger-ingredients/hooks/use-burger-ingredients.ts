import { useId, useMemo, useRef } from 'react';
import { IngrediensByTypes, useGetIngredientsQuery } from '..';
import { INGREDIENT_TYPES } from '#constants/ingredients';
import { useTranslation } from 'react-i18next';

export const useBurgerIngredients = () => {
  const { t } = useTranslation();

  const { data } = useGetIngredientsQuery();
  const { ingredientsArray } = data!;

  const ingredients: IngrediensByTypes[] = useMemo(
    () =>
      INGREDIENT_TYPES.map((type) => ({
        type: type,
        title: t(`ingredient.type.${type}`),
        ingredientIds: ingredientsArray.reduce<string[]>((arr, ingredient) => {
          if (ingredient.type === type) arr.push(ingredient._id);
          return arr;
        }, []),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ingredientsArray],
  );

  const tabs = useMemo(
    () =>
      INGREDIENT_TYPES.map((type) => ({
        type: type,
        title: t(`ingredient.type.${type}`),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = (index: number) => {
    const listNode = listRef.current!;
    const titleNode = listNode.querySelectorAll('li > h2')[index];

    titleNode.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    });
  };

  return { tabs, ingredients, scrollToIndex, listRef };
};
