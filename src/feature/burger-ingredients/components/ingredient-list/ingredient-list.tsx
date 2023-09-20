import { useAppDispatch } from '#app/store';
import { bunAdded, ingredientAdded } from '#app/store/order-slice';
import { useGetIngredientsQuery } from '#feature/burger-ingredients';
import { clx } from '#utils/clx';
import { IngredientCard } from '../ingredient-card';
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
      dispatch(bunAdded(id));
    } else {
      dispatch(ingredientAdded(id));
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
