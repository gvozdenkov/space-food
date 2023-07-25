import clsx from 'clsx';
import s from './ingredient-details.module.scss';
import { ingredientPropTypes } from '../../../../utils/config';
import { useTranslation } from 'react-i18next';

export const IngredientDetails = ({ ingredient }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(s.ingredientDetails)}>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className={clsx(s.image, 'pl-5 pr-5')}></img>
      <h4 className={clsx(s.title, 'text text_type_main-medium mt-4 mb-8')}>{ingredient.name}</h4>
      <div className={clsx(s.nutrition)}>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {t('ingredient.detail.calories')}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {t('ingredient.detail.proteins')}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {t('ingredient.detail.fat')}
        </p>
        <p className='text text_type_main-default text_color_inactive mb-4'>
          {t('ingredient.detail.carbohydrates')}
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
