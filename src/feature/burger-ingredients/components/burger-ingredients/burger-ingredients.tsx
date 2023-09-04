import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { useBurgerIngredients } from '#feature/burger-ingredients';
import { IngredientTypeList } from '../ingredient-type-list/ingredient-type-list';
import { TabList } from '#components/tab-list';
import s from './burger-ingredients.module.scss';

export const BurgerIngredients = () => {
  const { t } = useTranslation();
  const titleId = useId();

  const { tabs, ingredients, scrollToIndex, listRef } = useBurgerIngredients();

  return (
    <section className={s.burgerIngredients}>
      <h1 id={titleId} className='text text_type_main-large mt-10 mb-5'>
        {t('burgerIngredients.title')}
      </h1>

      <TabList
        tabs={tabs}
        onTabClick={scrollToIndex}
        extraClass='mb-10'
        aria-labelledby={titleId}
      />
      <IngredientTypeList ref={listRef} ingredients={ingredients} />
    </section>
  );
};
