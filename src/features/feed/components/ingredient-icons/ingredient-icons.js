import PropTypes from 'prop-types';
import s from './ingredient-icons.module.scss';
import clsx from 'clsx';
import { ingredientPropTypes } from '../../../../utils/config';
import { CircleIcon } from '../circle-icon';

export const IngredientIcons = ({ ingredients, maxVisible, extraClass }) => {
  const hideCount = ingredients.length - maxVisible;
  const visibleIngredients = ingredients.slice(0, maxVisible - 1);

  return (
    <ul className={clsx(s.list, extraClass)}>
      {visibleIngredients.map((ingredient, i) => (
        <li
          className={s.hover}
          style={{ transform: `translateX(calc(-16px * ${i}))`, zIndex: `${maxVisible - i}` }}
          key={i}>
          <CircleIcon img={ingredient.image_mobile} />
        </li>
      ))}

      {hideCount > 0 && (
        <li
          className={s.hover}
          style={{
            transform: `translateX(calc(-16px * ${maxVisible - 1}))`,
            zIndex: `1`,
          }}>
          <CircleIcon img={ingredients[maxVisible].image_mobile} hideCount={hideCount} key='end' />
        </li>
      )}
    </ul>
  );
};

IngredientIcons.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
