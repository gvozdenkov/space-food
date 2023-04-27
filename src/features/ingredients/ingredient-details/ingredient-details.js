import clsx from 'clsx';
import s from './ingredient-details.module.scss';
import { ingredientPropTypes } from '../../../utils/config';
import { useIntl } from 'react-intl';

export const IngredientDetails = ({ ingredient }) => {
  const intl = useIntl();

  return (
    <div className={clsx(s.ingredientDetails)}>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className={clsx(s.image, 'pl-5 pr-5')}></img>
      <h4 className={clsx(s.title, 'text text_type_main-medium mt-4 mb-8')}>{ingredient.name}</h4>
      <div className={clsx(s.nutrition)}>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {intl.formatMessage({ id: 'ingredients.detail.popup.calories' })}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {intl.formatMessage({ id: 'ingredients.detail.popup.proteins' })}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {intl.formatMessage({ id: 'ingredients.detail.popup.fat' })}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {intl.formatMessage({ id: 'ingredients.detail.popup.carbohydrates' })}
        </p>
        <p className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</p>
        <p className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</p>
        <p className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</p>
        <p className='text text_type_digits-default text_color_inactive'>
          {ingredient.carbohydrates}
        </p>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
