import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const useBurgerSort = () => {
  const {
    attributes: sortableAttributes,
    listeners: sortableListeners,
    setNodeRef: sortableRef,
    setActivatorNodeRef: setSortableActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const sortableStyle = {
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

  return {
    sortableRef,
    setSortableActivatorNodeRef,
    sortableStyle,
    sortableAttributes,
    sortableListeners,
  };
};
