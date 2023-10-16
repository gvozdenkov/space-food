import { useId } from 'react';
import { useTranslation } from 'react-i18next';
import { IngredientTypeList } from '../ingredient-type-list/ingredient-type-list';
import { TabList } from '#shared/ui/tab-list';

import s from './burger-ingredients.module.scss';
import { useBurgerIngredients } from '#widgets/burger-ingredients';

export const BurgerIngredients = () => {
  const { t } = useTranslation();
  const titleId = useId();

  const { tabs, activeTab, setActiveTab, ingredients, scrollToIndex, IngredientTypeListRef } =
    useBurgerIngredients();

  return (
    <section className={s.burgerIngridients}>
      <h1 id={titleId} className='text text_type_main-large mt-10 mb-5'>
        {t('burgerIngredients.title')}
      </h1>

      <TabList
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onTabClick={scrollToIndex}
        extraClass='mb-10'
        aria-labelledby={titleId}
      />
      <IngredientTypeList ref={IngredientTypeListRef} ingredients={ingredients} />
    </section>
  );
};
