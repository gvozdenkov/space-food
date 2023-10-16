import { clx } from '#shared/lib';
import { ConstructorElement } from '#shared/ui';
import { DragIcon } from '#shared/ui/icons';

import s from './burger-sortable-item.module.scss';
import { useBurgerSortableItem } from './use-burger-sortable-item';

type Props = {
  price: number;
  text: string;
  thumbnail: string;
  uuid: string;
  handleDelete: () => void;
};

export const BurgerSortableItem = ({ price, text, thumbnail, uuid, handleDelete }: Props) => {
  const { setNodeRef, setActivatorNodeRef, style, attributes, listeners } =
    useBurgerSortableItem(uuid);

  return (
    <li ref={setNodeRef} className={clx(s.withDrag)} style={style} {...attributes} key={uuid}>
      <div ref={setActivatorNodeRef} {...listeners} className={clx(s.drag)}>
        {<DragIcon type='primary' />}
      </div>
      <ConstructorElement
        price={price}
        text={text}
        thumbnail={thumbnail}
        handleDelete={handleDelete}
      />
    </li>
  );
};
