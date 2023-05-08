import { useDispatch, useSelector } from 'react-redux';
import { ingredientMoved } from '../../services/burger-constructor-slice';
import { useCallback } from 'react';

export const useBurgerConstructorSortableList = () => {
  const { ingredients: constructorIngredients } = useSelector((state) => state.burgerConstructor);
  const dispatch = useDispatch();

  const ingredients = constructorIngredients.map((ingredient) => ({
    thumbnail: ingredient.thumbnail,
    text: ingredient.text,
    price: ingredient.price,
    _itemId: ingredient._itemId,
  }));

  const sortableItems = ingredients.map((item) => item._itemId);

  const findIndex = (id) => {
    const element = ingredients.find((element) => element._itemId === id);
    return ingredients.indexOf(element);
  };

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const activeIndex = findIndex(active.id);
      const overIndex = findIndex(over.id);
      dispatch(ingredientMoved(ingredients, activeIndex, overIndex));
    }
  }, []);

  return { ingredients, sortableItems, handleDragEnd };
};
