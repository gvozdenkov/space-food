import PropTypes from 'prop-types';
import s from './ingredient-icons.module.scss';
import clsx from 'clsx';
import { ingredientPropTypes } from '../../../../utils/config';

export const IngredientIcons = ({ ingredients, extraClass }) => {
  const maxVisible = 6;
  const hideCount = ingredients.length - maxVisible;
  const visibleIngredients = ingredients.slice(0, maxVisible - 1);

  return (
    <ul className={clsx(s.list, extraClass)}>
      {visibleIngredients.map((ingredient, index) => (
        <li className={s[`overlay-${maxVisible - index}`]} key={index}>
          <img src={ingredient.image_mobile} alt='' className={clsx(s.icon)} />
        </li>
      ))}
      {hideCount > 0 && (
        <li className={s[`overlay-end`]} key={'end'}>
          <p className={clsx('text text_type_main-default', s['hide-count'])}>+{hideCount}</p>
          <img src={ingredients[maxVisible].image_mobile} alt='' className={clsx(s['icon-end'])} />
        </li>
      )}
    </ul>
  );
};

IngredientIcons.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
