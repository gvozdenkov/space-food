import { forwardRef, memo } from 'react';

import { clx } from '#shared/lib';
import { IngredientList } from '../ingredient-list';
import { IngrediensByTypes } from '#widgets/burger-ingredients';

import s from './ingredient-type-list.module.scss';

type Props = {
  ingredients: IngrediensByTypes[];
};

export const IngredientTypeList = memo(
  forwardRef<HTMLUListElement, Props>(({ ingredients }, forwardRef) => {

    return (
      <ul ref={forwardRef} className={clx(s.ingredientList, 'customScroll')}>
        {ingredients.map(({ type, title, ingredientIds }) => {
          return (
            <li className='testClass' key={type}>
              <h2 id={type} className='text text_type_main-medium mb-6'>
                {title}
              </h2>
              <IngredientList ingredientIds={ingredientIds} />
            </li>
          );
        })}
      </ul>
    );
  }),
);

IngredientTypeList.displayName = 'IngredientTypeList';
