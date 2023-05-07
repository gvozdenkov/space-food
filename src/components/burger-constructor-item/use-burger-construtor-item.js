import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { findConstructorIngredient } from '../../utils/utils';
import { DragTypes } from '../../utils/config';
import { ingredientMoved } from '../../services/burger-constructor-slice';

export const useBurgerConstrutorItem = (id) => {
  const { ingredients } = useSelector((state) => state.burgerConstructor);

  const dispatch = useDispatch();
  const originalIndex = findConstructorIngredient(ingredients, id).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DragTypes.CONSTRUCTOR_INGREDIENT,
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          dispatch(ingredientMoved(droppedId, originalIndex));
        }
      },
    }),
    [id, originalIndex],
  );

  const [, drop] = useDrop(() => ({
    accept: DragTypes.CONSTRUCTOR_INGREDIENT,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findConstructorIngredient(ingredients, id);
        dispatch(ingredientMoved(draggedId, overIndex));
      }
    },
  }));

  return { isDragging, drag, drop };
};
