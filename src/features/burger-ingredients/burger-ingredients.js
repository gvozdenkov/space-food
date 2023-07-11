import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { IngredientsList } from './components/ingredients-list';
import s from './burger-ingredients.module.scss';
import { TabContextProvider } from './context/tab-context';
import { TabList } from './components/tab-list';

export const BurgerIngredients = () => {
  const { t } = useTranslation();

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>{t('constructor.title')}</h1>
      <TabContextProvider>
        <TabList />
        <IngredientsList />
      </TabContextProvider>
    </section>
  );
};
