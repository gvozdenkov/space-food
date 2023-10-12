import { useState } from 'react';
import { DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';

import { useAppDispatch } from '#shared/model/hooks';
import { useGetIngredientsQuery } from '#widgets/burger-ingredients';
import { ingredientIds, orderDropTarget } from '#shared/config/const';
import { bunAdded, ingredientAdded, removeDragTarget, setDragTarget } from '#entities/cart';

export const useDragIngredients = () => {
  const dispatch = useAppDispatch();
  const { data } = useGetIngredientsQuery();
  const { ingredientsObj } = data!;
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

  const handleDragStart = ({ active }: DragEndEvent) => {
    dispatch(setDragTarget({ id: active?.id }));
    setActiveId(active.id);
  };

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const ingredientDragType = ingredientsObj[active?.id]?.type;

    dispatch(removeDragTarget());
    setActiveId(null);

    if (ingredientDragType === ingredientIds.BUN && over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(bunAdded(ingredientsObj[active?.id]));
    } else if (
      ingredientDragType === ingredientIds.MAIN &&
      over?.id === orderDropTarget.DROP_ZONE
    ) {
      dispatch(ingredientAdded(ingredientsObj[active?.id]));
    }
  };

  const handleDragOver = ({ active, over }: DragEndEvent) => {
    const ingredientDragType = ingredientsObj[active?.id].type;

    if (over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(setDragTarget({ type: ingredientDragType, id: active?.id }));
    } else {
      dispatch(removeDragTarget());
    }
  };

  return { handleDragStart, handleDragEnd, handleDragOver, activeId };
};
