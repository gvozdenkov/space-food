import clsx from 'clsx';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { useIntl } from 'react-intl';
import { IngredientCard } from '../ingredient-card';

export const IngredientList = ({ ingredients }) => {
  const intl = useIntl();

  return (
    <ul className={clsx(s.ingredientList, 'mb-10')}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <IngredientCard ingredient={ingredient} />
          </li>
        );
      })}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
