import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { useIngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';
import { CategoryList } from '../category-list';
import { IngredientDetails } from '../IngredientDetails';
import { Modal } from '../modal';
import { TabList } from '../tab-list';
import s from './burger-ingredients.module.scss';
import { AnimatePresence } from 'framer-motion';
import { TabContextProvider } from '../../utils/contexts/tab-context/tab-context';

export const BurgerIngredients = () => {
  const intl = useIntl();
  const { selectedId, selectedIngredient, closeModal } = useIngredientSelectedContext();

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>
        {intl.formatMessage({ id: 'constructor.title' })}
      </h1>
      <TabContextProvider>
        <TabList />
        <CategoryList />
      </TabContextProvider>

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {selectedId && (
          <Modal
            title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
            handleClose={closeModal}>
            <IngredientDetails ingredient={selectedIngredient} />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};
