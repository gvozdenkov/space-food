import { useCallback, useMemo, useId } from 'react';
import { useTranslation } from 'react-i18next';
import { TabList } from '#components/tab-list';
import { IngrediensByTypes, useGetIngredientsQuery } from '#feature/burger-ingredients';
import { IngredientList } from '../ingredients-list/ingredient-list';
import { INGREDIENT_TYPES } from '#constants/ingredients';
import s from './burger-ingredients.module.scss';

export const BurgerIngredients = () => {
  const { t } = useTranslation();
  const { data } = useGetIngredientsQuery();
  const { ingredientsArray } = data!;

  const titleId = useId();

  const ingredients: IngrediensByTypes[] = useMemo(
    () =>
      INGREDIENT_TYPES.map((tabType) => ({
        type: tabType,
        title: t(`ingredient.type.${tabType}`),
        list: ingredientsArray.filter((ingredient) => ingredient.type === tabType),
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ingredientsArray],
  );

  const tabs = useMemo(
    () =>
      ingredients.map((ingredient) => ({
        title: ingredient.title,
        type: ingredient.type,
      })),
    [ingredients],
  );

  const handleTabClick = useCallback(() => {
    console.log('i am Tab click handler');
  }, []);

  return (
    <section className={s.burgerIngredients}>
      <h1 id={titleId} className='text text_type_main-large mt-10 mb-5'>
        {t('burgerIngredients.title')}
      </h1>
      <TabList
        tabs={tabs}
        onTabClick={handleTabClick}
        extraClass='mb-10'
        aria-labelledby={titleId}
      />
      <IngredientList ingredients={ingredients} />
    </section>
  );
};
