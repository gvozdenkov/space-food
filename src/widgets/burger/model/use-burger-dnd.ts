import { useMemo } from 'react';
import {
  MouseSensor,
  TouchSensor,
  KeyboardSensor,
  useSensor,
  useSensors,
  useDroppable,
  DragEndEvent,
} from '@dnd-kit/core';
import { ingredientIds, orderDropTarget } from '#shared/config/const';
import { useAppDispatch, useAppSelector } from '#shared/model/hooks';
import { cartModel, selectCartIngredients, selectDragTarget } from '#entities/cart';

export const useBurgerDnD = () => {
  const ingredients = useAppSelector(selectCartIngredients);
  const dispatch = useAppDispatch();

  const sortableItems = useMemo(() => ingredients.map((item) => item.uuid), [ingredients]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      dispatch(cartModel.actions.ingredientMoved(active.id, over?.id));
    }
  };

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

  const dragOverStyle = () => ({
    filter: `drop-shadow(0px 0px 8px rgba(51, 51, 255, 0.25)) drop-shadow(0px 0px 10px rgba(51, 51, 255, 0.5)) drop-shadow(0px 0px 30px rgba(51, 51, 255, 0.5))`,
  });

  const dragTarget = useAppSelector(selectDragTarget);

  const styleOverDrag = (target: string) => {
    const type = dragTarget?.type;

    const isSelectMiddle =
      target === orderDropTarget.MIDDLE &&
      (type === ingredientIds.MAIN || type === ingredientIds.SAUCE);
    const isSelectBun = target === orderDropTarget.BUN && type === ingredientIds.BUN;

    if (isSelectBun || isSelectMiddle) {
      return dragOverStyle();
    } else {
      return {};
    }
  };

  const middleStyle = styleOverDrag(orderDropTarget.MIDDLE);
  const bunStyle = styleOverDrag(orderDropTarget.BUN);

  const { setNodeRef: droppableRef } = useDroppable({ id: orderDropTarget.DROP_ZONE });

  return {
    droppableRef,
    middleStyle,
    bunStyle,
    sortableItems,
    handleDragEnd,
    sensors,
  };
};
