import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../../features/ingredient-details/burger-ingredients';
import { useIngredientContext } from '../../common/contexts/IngredientContext/IngredientContext';
import { Loading } from '../Loading';
import { useIntl } from 'react-intl';
import { Modal } from '../modal';
import { useEffect, useMemo, useState } from 'react';
import { CartContextProvider } from '../../common/contexts/CartContext/CartContext';
import { useSelector } from 'react-redux';

export const Main = () => {
  const intl = useIntl();
  const ingredientsStatus = useSelector((state) => state.ingredients.status);

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   if (error) setIsOpen(true);
  // }, [error]);

  const loading = () => <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />;

  const errorModal = () => (
    <Modal
      title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
      open={isOpen}
      setOpen={setIsOpen}>
      <p className='text text_type_main-medium mt-8'>
        {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
      </p>
    </Modal>
  );

  const content = () => (
    <div className={s.main}>
      <CartContextProvider>
        <BurgerIngredients />
        <BurgerConstructor />
      </CartContextProvider>
    </div>
  );

  return content();
  // return useMemo(() => {
  //   return isLoading ? loading() : error ? errorModal() : content();
  // }, [isLoading, error, isOpen, intl]);
};
