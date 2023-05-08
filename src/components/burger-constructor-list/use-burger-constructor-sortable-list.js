import { useDispatch, useSelector } from 'react-redux';
import { ingredientMoved } from '../../services/burger-constructor-slice';
import { useCallback, useMemo } from 'react';

export const useBurgerConstructorSortableList = () => {
  const { ingredients: constructorIngredients } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  const ingredients = useMemo(
    () =>
      constructorIngredients.map((ingredient) => ({
        thumbnail: ingredient.thumbnail,
        text: ingredient.text,
        price: ingredient.price,
        _itemId: ingredient._itemId,
      })),
    [constructorIngredients],
  );

  const sortableItems = useMemo(() => ingredients.map((item) => item._itemId), [ingredients]);

  const handleDragEnd = useCallback(
    (event) => {
      const { active, over } = event;

      if (active.id !== over.id) {
        dispatch(ingredientMoved(active.id, over.id));
      }
    },
    [dispatch],
  );

  return { ingredients, sortableItems, handleDragEnd };
};
