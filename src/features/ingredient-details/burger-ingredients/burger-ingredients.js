import clsx from 'clsx';
import { useIntl } from 'react-intl';
import { IngredientDetails } from '../../ingredients/ingredient-details';
import { Modal } from '../../../components/modal';
import { TabList } from '../../../components/tab-list';
import s from './burger-ingredients.module.scss';
import { AnimatePresence } from 'framer-motion';
import { TabContextProvider } from '../../../common/contexts/tab-context/tab-context';
import { memo } from 'react';
import { IngredientsList } from '../../ingredients/ingredients-list';
import { useDispatch, useSelector } from 'react-redux';
import { unselected } from '../ingredient-details-slice';

export const BurgerIngredients = memo(() => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const selectedIngredient = useSelector((state) => state.ingredientDetails);
  const closeModal = () => dispatch(unselected());

  return (
    <section className={clsx(s.burgerIngridients, 'pt-10')}>
      <h1 className='text text_type_main-large'>
        {intl.formatMessage({ id: 'constructor.title' })}
      </h1>
      <TabContextProvider>
        <TabList />
        <IngredientsList />
      </TabContextProvider>

      <AnimatePresence initial={false} mode='wait' onExitComplete={() => null}>
        {Object.keys(selectedIngredient).length !== 0 && (
          <Modal
            title={intl.formatMessage({ id: 'ingredients.detail.popup.title' })}
            handleClose={closeModal}>
            <IngredientDetails ingredient={selectedIngredient} />
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
});
