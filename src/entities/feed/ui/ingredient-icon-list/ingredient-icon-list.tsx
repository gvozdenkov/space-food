import { useId } from 'react';
import { Ingredient } from '#api/ingredients.types';
import { clx } from '#shared/lib';
import { IngredientIcon } from '../ingredient-icon/ingredient-icon';

import s from './ingredient-icon-list.module.scss';

type Props = {
  ingredients: Ingredient[];
  maxVisible: number;
  extraClass?: string;
};

export const IngredientIconList = ({ ingredients, maxVisible, extraClass }: Props) => {
  const hideCount = ingredients.length - maxVisible;
  const visibleIngredients = ingredients.slice(0, maxVisible - 1);
  const endId = useId();

  return (
    <ul className={clx(s.list, extraClass)}>
      {visibleIngredients.map((ingredient, i) => (
        <li
          className={s.hover}
          style={{ transform: `translateX(calc(-16px * ${i}))`, zIndex: `${maxVisible - i}` }}
          key={i}>
          <IngredientIcon img={ingredient.image_mobile} />
        </li>
      ))}

      {hideCount > 0 && (
        <li
          className={s.hover}
          style={{
            transform: `translateX(calc(-16px * ${maxVisible - 1}))`,
            zIndex: `1`,
          }}>
          <IngredientIcon
            img={ingredients[maxVisible].image_mobile}
            hideCount={hideCount}
            key={endId}
          />
        </li>
      )}
    </ul>
  );
};
