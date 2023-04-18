import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { useIngredientContext } from '../../utils/contexts/IngredientContext';
import { Loading } from '../Loading';
import { useIntl } from 'react-intl';
import { Modal } from '../modal';
import { useEffect, useMemo, useState } from 'react';
import { CartContextProvider } from '../../utils/contexts/CartContext/CartContext';

export const Main = () => {
  const intl = useIntl();
  const { isLoading, error } = useIngredientContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  return useMemo(() => {
    return isLoading ? (
      <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />
    ) : error ? (
      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    ) : (
      <div className={s.main}>
        <CartContextProvider>
          <BurgerIngredients />
          <BurgerConstructor />
        </CartContextProvider>
      </div>
    );
  }, [isLoading, error, isOpen, intl]);
};
