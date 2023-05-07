import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { getIcons } from '../../utils';
import s from './burger-constructor-item.module.scss';
import clsx from 'clsx';

export const BurgerConstructorItem = ({ props, handleClose }) => {
  const { haveDrag, _itemId } = props;

  return (
    <div className={clsx({ [s.withDrag]: haveDrag })}>
      {haveDrag && getIcons('primary')['drag']}
      <ConstructorElement {...props} handleClose={handleClose} />
    </div>
  );
};
