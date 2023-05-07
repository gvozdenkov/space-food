import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils';
import s from './burger-constructor-item.module.scss';
import clsx from 'clsx';
import { useBurgerConstrutorItem } from './use-burger-construtor-item';

export const BurgerConstructorItem = ({ props, handleClose }) => {
  const { haveDrag, _itemId } = props;
  const { isDragging, drag, drop } = useBurgerConstrutorItem(_itemId);

  return (
    <div
      ref={(node) => (haveDrag ? drag(drop(node)) : null)}
      className={clsx({ [s.withDrag]: haveDrag, [s.isDragging]: isDragging })}>
      {haveDrag && getIcons('primary')['drag']}
      <ConstructorElement {...props} handleClose={handleClose} />
    </div>
  );
};
