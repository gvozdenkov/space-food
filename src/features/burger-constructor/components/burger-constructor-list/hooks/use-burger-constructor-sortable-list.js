import { useDispatch, useSelector } from 'react-redux';
import { MouseSensor, TouchSensor, KeyboardSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useCallback, useMemo } from 'react';
import { ingredientMoved, selectOrderIngredients } from '../../../services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../../../../routes/root-layout/ingredients-loader';

export const useBurgerConstructorSortableList = () => {
  const constructorIngredients = useSelector(selectOrderIngredients);
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const dispatch = useDispatch();

  const ingredients = useMemo(
    () =>
      constructorIngredients.map((item) => {
        const { _id, _itemId } = item;
        const ingredient = ingredientsObj[_id];

        return {
          thumbnail: ingredient?.image_mobile,
          text: ingredient?.name,
          price: ingredient?.price,
          _itemId,
        };
      }),
    [constructorIngredients, ingredientsObj],
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
