import { useSortable } from '@dnd-kit/sortable';
import { Transform } from '@dnd-kit/utilities';
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

  const trans = isDragging
    ? {
        ...transform,
        scaleX: 1.02,
        scaleY: 1.02,
      }
    : transform;

  const style = {
    transform: CSS.Transform.toString(trans as Transform),
    transition,
  };

  return { setNodeRef, setActivatorNodeRef, style, attributes, listeners };
};
