import { clx } from '#utils/clx';
import { IngredientCard } from '../ingredient-card';
import s from './ingredient-list.module.scss';

type Props = {
  ingredientIds: string[];
};

export const IngredientList = ({ ingredientIds }: Props) => {
  const addToCartHandler = (id: string) => {
    console.log(id);
  };

  return (
    <ul className={clx(s.ingredientList, 'mb-6')}>
      {ingredientIds.map((id) => (
        <li key={id}>
          <IngredientCard ingredientId={id} onClick={addToCartHandler} />
        </li>
      ))}
    </ul>
  );
};
