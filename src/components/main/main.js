import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../../features/ingredient-details/burger-ingredients';
import { Loading } from '../Loading';
import { useIntl } from 'react-intl';
import { Modal } from '../modal';
import { useEffect, useState } from 'react';
import { CartContextProvider } from '../../common/contexts/CartContext/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchIngredients } from '../../features/ingredients/ingredients-slice';
import { FETCH_STATUS } from '../../utils/constants';

export const Main = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const ingredientsStatus = useSelector((state) => state.ingredients.status);
  const error = useSelector((state) => state.ingredients.error);

  const isLoading = ingredientsStatus === FETCH_STATUS.LOADING;
  const isSuccessed = ingredientsStatus === FETCH_STATUS.SUCCESSED;
  const isError = ingredientsStatus === FETCH_STATUS.FAILED;

  useEffect(() => {
    if (ingredientsStatus === FETCH_STATUS.IDLE) {
      dispatch(fetchIngredients());
    }
  }, [ingredientsStatus, dispatch]);

  useEffect(() => {
    if (isError) setIsOpen(true);
  }, [isError]);

  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const content = isLoading ? (
    <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />
  ) : isSuccessed ? (
    <div className={s.main}>
      <CartContextProvider>
        <BurgerIngredients />
        <BurgerConstructor />
      </CartContextProvider>
    </div>
  ) : (
    isOpen && (
      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        handleClose={close}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
        <p className='text text_type_main-small text_color_error mt-8'>{error}</p>
      </Modal>
    )
  );

  return <>{content}</>;
};
