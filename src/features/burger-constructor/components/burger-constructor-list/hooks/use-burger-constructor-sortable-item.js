import { useDispatch } from 'react-redux';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useCallback } from 'react';
import { ingredientRemoved } from '../../../services/order-slice';

export const useBurgerConstructorSortableItem = (_itemId) => {
  const dispatch = useDispatch();

  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: _itemId,
  });

  const style = {
    transform: CSS.Transform.toString(
      isDragging
        ? {
            ...transform,
            scaleX: 1.02,
            scaleY: 1.02,
          }
        : transform,
    ),
    transition,
  };

  const handleClose = useCallback(() => dispatch(ingredientRemoved(_itemId)), [dispatch, _itemId]);

  return { setNodeRef, setActivatorNodeRef, style, attributes, listeners, handleClose };
};
