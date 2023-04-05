import clsx from 'clsx';
import { IngredientCard } from '../ingredient-card/ingredient-card';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { IngredeintImage } from '../ingredient-card/ingredeint-image';
import { IngredientInfo } from '../ingredient-card/ingredient-info';

export const IngredientList = ({ ingredients }) => {
  return (
    <ul className={clsx(s.ingredientList, 'mb-10')}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <IngredientCard
              _id={ingredient._id}
              image={<IngredeintImage image={ingredient.image} />}
              info={<IngredientInfo price={ingredient.price} name={ingredient.name} />}
            />
          </li>
        );
      })}
    </ul>
  );
};

IngredientList.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};
