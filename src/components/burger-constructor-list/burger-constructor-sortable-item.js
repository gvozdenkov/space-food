import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { getIcons } from '../../utils';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import s from './burger-constructor-sortable-item.module.scss';
import { useDispatch } from 'react-redux';
import { ingredientRemoved } from '../../services/burger-constructor-slice';

export const BurgerConstructorSortableItem = (props) => {
  const { _itemId } = props;
  const dispatch = useDispatch();

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: _itemId,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClose = () => dispatch(ingredientRemoved(_itemId));

  return (
    <li ref={setNodeRef} className={clsx(s.withDrag)} style={style} {...attributes} key={_itemId}>
      <div {...listeners}>{getIcons('primary')['drag']}</div>
      <ConstructorElement {...props} handleClose={handleClose} />
    </li>
  );
};
