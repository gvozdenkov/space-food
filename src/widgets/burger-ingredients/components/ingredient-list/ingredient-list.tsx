import { bunAdded, ingredientAdded } from '#entities/cart/model/slice';
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
  const { ingredientsObj } = data!;

  const dispatch = useAppDispatch();

  const handleAddClick = (id: string) => {
    if (ingredientsObj[id].type === 'bun') {
      dispatch(bunAdded(ingredientsObj[id]));
    } else {
      dispatch(ingredientAdded(ingredientsObj[id]));
    }
  };

  return (
    <ul className={clx(s.ingredientList, 'mb-6')}>
      {ingredientIds.map((id) => (
        <li key={id}>
          <IngredientCard ingredientId={id} onClick={handleAddClick} />
        </li>
      ))}
    </ul>
  );
};
