import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  bunAdded,
  ingredientAdded,
  removeDragTarget,
  setDragTarget,
} from '../../features/burger-constructor/services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../root-layout/ingredients-loader';
import { ingredientIds, orderDropTarget } from '../../utils/config';

export const useDragIngredients = () => {
  const dispatch = useDispatch();
  const { data: ingredients } = useQuery(ingredientsQuery());
  const [activeId, setActiveId] = useState(null);

  const handleDragStart = ({ active, over }) => {
    dispatch(setDragTarget({ id: active?.id }));
    setActiveId(active.id);
  };

  const handleDragEnd = ({ active, over }) => {
    const ingredientDragType = ingredients[active?.id]?.type;

    dispatch(removeDragTarget());
    setActiveId(null);

    if (ingredientDragType === ingredientIds.BUN && over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(bunAdded(active?.id));
    } else if (
      ingredientDragType === ingredientIds.MAIN &&
      over?.id === orderDropTarget.DROP_ZONE
    ) {
      dispatch(ingredientAdded(active?.id));
    }
  };

  const handleDragOver = ({ active, over }) => {
    const ingredientDragType = ingredients[active?.id].type;

    if (over?.id === orderDropTarget.DROP_ZONE) {
      dispatch(setDragTarget({ type: ingredientDragType, id: active?.id }));
    } else {
      dispatch(removeDragTarget());
    }
  };

  return { handleDragStart, handleDragEnd, handleDragOver, activeId };
};
