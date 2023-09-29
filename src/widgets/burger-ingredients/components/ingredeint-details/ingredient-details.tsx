import { useTranslation } from 'react-i18next';
import { Ingredient } from '#api/ingredients.types';
import { clx } from '#shared/lib';
import s from './ingredient-details.module.scss';

type Props = {
  ingredient: Ingredient;
  extraClass?: string;
};

export const IngredientDetails = ({ ingredient, extraClass = '' }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={clx(s.ingredientDetails, { [extraClass]: !!extraClass })}>
      <img
        src={ingredient.image_large}
        alt={ingredient.name}
        className={clx(s.image, 'pl-5 pr-5')}></img>
      <h4 className={clx(s.title, 'text text_type_main-medium mt-4 mb-8')}>{ingredient.name}</h4>
      <div className={clx(s.nutrition)}>
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
