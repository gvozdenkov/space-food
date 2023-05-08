import { getIcons } from '../../utils';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import clsx from 'clsx';
import s from './burger-constructor-sortable-item.module.scss';
import { useBurgerConstructorSortableItem } from './use-burger-constructor-sortable-item';

export const BurgerConstructorSortableItem = (props) => {
  const { _itemId } = props;

  const { setNodeRef, setActivatorNodeRef, style, attributes, listeners, handleClose } =
    useBurgerConstructorSortableItem(_itemId);

  return (
    <li ref={setNodeRef} className={clsx(s.withDrag)} style={style} {...attributes} key={_itemId}>
      <div ref={setActivatorNodeRef} {...listeners} className={clsx(s.drag)}>
        {getIcons('primary')['drag']}
      </div>
      <ConstructorElement {...props} handleClose={handleClose} />
    </li>
  );
};
