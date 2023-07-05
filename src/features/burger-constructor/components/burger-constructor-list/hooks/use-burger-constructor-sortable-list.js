import { useDispatch, useSelector } from 'react-redux';
import { MouseSensor, TouchSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useCallback, useMemo } from 'react';
import { ingredientMoved, selectOrderIngredients } from '../../../services/order-slice';

export const useBurgerConstructorSortableList = () => {
  const constructorIngredients = useSelector(selectOrderIngredients);
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

  // DnD Sensors
  const sensors = useSensors(
    useSensor(MouseSensor),

    useSensor(TouchSensor, {
      // Press delay of 250ms, with tolerance of 5px of movement
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),

    useSensor(KeyboardSensor),
  );

  return { ingredients, sortableItems, handleDragEnd, sensors };
};
