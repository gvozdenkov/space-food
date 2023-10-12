import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export const useBurgerSortableItem = (uuid: string) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: uuid,
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

  return { setNodeRef, setActivatorNodeRef, style, attributes, listeners };
};
