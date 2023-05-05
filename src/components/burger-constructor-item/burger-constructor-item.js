import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils';
import { useDrag, useDrop } from 'react-dnd';
import { DragTypes } from '../../utils/config';
import s from './burger-constructor-item.module.scss';
import clsx from 'clsx';
import { findConstructorIngredient } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { ingredientMoved } from '../../features/burger-constructor/burger-constructor-slice';

export const BurgerConstructorItem = ({ props, handleClose }) => {
  const { haveDrag, _itemId } = props;
  const { ingredients } = useSelector((state) => state.burgerConstructor);

  console.log(ingredients);

  const dispatch = useDispatch();
  const originalIndex = findConstructorIngredient(ingredients, _itemId).index;

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DragTypes.CONSTRUCTOR_INGREDIENT,
      item: { _itemId, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { _itemId: droppedId, originalIndex } = item;
        const didDrop = monitor.didDrop();
        if (!didDrop) {
          dispatch(ingredientMoved({ id: droppedId, toIndex: originalIndex }));
        }
      },
    }),
    [_itemId, originalIndex],
  );

  const [, drop] = useDrop(() => ({
    accept: DragTypes.CONSTRUCTOR_INGREDIENT,
    hover({ _itemId: draggedId }) {
      if (draggedId !== _itemId) {
        const { index: overIndex } = findConstructorIngredient(ingredients, _itemId);
        dispatch(ingredientMoved({ id: draggedId, toIndex: overIndex }));
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={clsx({ [s.withDrag]: haveDrag, [s.isDragging]: false })}>
      {haveDrag && getIcons('primary')['drag']}
      <ConstructorElement {...props} handleClose={handleClose} />
    </div>
  );
};
