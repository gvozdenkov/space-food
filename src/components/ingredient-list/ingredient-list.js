import clsx from 'clsx';
import { Card } from '../ingredient-card/card';
import s from './ingredient-list.module.scss';
import PropTypes from 'prop-types';
import { ingredientPropTypes } from '../../utils/config';
import { Image } from '../ingredient-card/image';
import { IngredientInfo } from '../ingredient-card/ingredient-info';

export const IngredientList = ({ ingredients }) => {
  return (
    <ul className={clsx(s.ingredientList, 'mb-10')}>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient._id}>
            <Card
              _id={ingredient._id}
              image={<Image image={ingredient.image} />}
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
