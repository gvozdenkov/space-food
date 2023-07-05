import { DndContext, closestCenter } from '@dnd-kit/core';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import clsx from 'clsx';
import listStyle from '../../burger-constructor-list.module.scss';
import { BurgerConstructorSortableItem } from '../burger-constructor-sortable-item/burger-constructor-sortable-item';
import { useBurgerConstructorSortableList } from '../../hooks/use-burger-constructor-sortable-list';

export const BurgerConstructorSortableList = () => {
  const { ingredients, sortableItems, handleDragEnd, sensors } = useBurgerConstructorSortableList();

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
      <SortableContext items={sortableItems} strategy={verticalListSortingStrategy}>
        <ul className={clsx(listStyle.list)}>
          {ingredients.map((ingredient) => (
            <BurgerConstructorSortableItem
              {...ingredient}
              key={ingredient._itemId}
              id={ingredient._itemId}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
};
