import { useDraggable } from '@dnd-kit/core';

import { cartModel } from '#entities/cart';
import { useAppDispatch } from '#shared/model/hooks';
import { clx } from '#shared/lib';
import { IngredientCard } from '../ingredient-card';
import { useGetIngredientsQuery } from '#widgets/burger-ingredients';

import s from './ingredient-list.module.scss';

type Props = {
  ingredientIds: string[];
};

export const IngredientList = ({ ingredientIds }: Props) => {
  const { data } = useGetIngredientsQuery();
  const dispatch = useAppDispatch();

  const { ingredientsObj } = data!;

  const DraggableItem = ({ id }: { id: string }) => {
    const { attributes, listeners, setNodeRef } = useDraggable({ id });

    const handleAddClick = (id: string) => {
      if (ingredientsObj[id].type === 'bun') {
        dispatch(cartModel.actions.bunAdded(ingredientsObj[id]));
      } else {
        dispatch(cartModel.actions.ingredientAdded(ingredientsObj[id]));
      }
    };

    return (
      <li ref={setNodeRef} key={id} className='dgar-item'>
        <IngredientCard
          ingredientId={id}
          onClick={handleAddClick}
          dragAttributes={attributes}
          dragListeners={listeners}
        />
      </li>
    );
  };

  return (
    <ul className={clx(s.ingredientList, 'mb-6')}>
      {ingredientIds.map((id) => (
        <DraggableItem id={id} key={id} />
      ))}
    </ul>
  );
};
