import clsx from 'clsx';
import s from './ingredient-details.module.scss';
import { ingredientPropTypes } from '../../utils/config';

export const IngredientDetails = ({ ingredient }) => {
  return (
    <div className={clsx(s.ingredientDetails)}>
      <img src={ingredient.image_large} alt={ingredient.name}></img>
      <h4 className="text text_type_main-medium mt-4 mb-8">{ingredient.name}</h4>
      <div className={clsx(s.ingredientDetails__nutrition)}>
        <p className="text text_type_main-default text_color_inactive mb-4">Калории, ккал</p>
        <p className="text text_type_main-default text_color_inactive mb-4">Белки, г</p>
        <p className="text text_type_main-default text_color_inactive mb-4">Жиры, г</p>
        <p className="text text_type_main-default text_color_inactive mb-4">Углеводы, г</p>
        <p className="text text_type_digits-default text_color_inactive">{ingredient.calories}</p>
        <p className="text text_type_digits-default text_color_inactive">{ingredient.proteins}</p>
        <p className="text text_type_digits-default text_color_inactive">{ingredient.fat}</p>
        <p className="text text_type_digits-default text_color_inactive">
          {ingredient.carbohydrates}
        </p>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
