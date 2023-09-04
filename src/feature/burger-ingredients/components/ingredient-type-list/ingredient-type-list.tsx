import { IngrediensByTypes } from '#feature/burger-ingredients';
import { clx } from '#utils/clx';
import { IngredientList } from '../ingredient-list';
import s from './ingredient-type-list.module.scss';

type Props = {
  ingredients: IngrediensByTypes[];
};

export const IngredientTypeList = ({ ingredients }: Props) => {
  return (
    <ul className={clx(s.ingredientList, 'customScroll')}>
      {ingredients.map(({ type, title, ingredientIds }) => {
        return (
          <li key={type}>
            <h2 className='text text_type_main-medium mb-6'>{title}</h2>
            <IngredientList ingredientIds={ingredientIds} />
          </li>
        );
      })}
    </ul>
  );
};
