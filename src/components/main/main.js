import s from './main.module.scss';
import { BurgerConstructor } from '../burger-constructor';
import { BurgerIngredients } from '../burger-ingredients';
import { ConstructorProvider } from '../../utils/contexts/ConstructorContext';
import { useIngredientContext } from '../../utils/contexts/IngredientContext';
import { Loading } from '../Loading';
import { useIntl } from 'react-intl';
import { Modal } from '../modal';
import { useEffect, useState } from 'react';

export const Main = () => {
  const intl = useIntl();
  const { isLoading, error } = useIngredientContext();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  if (isLoading) return <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />;
  
  if (error)
    return (
      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    );

  return (
    <>
      <section className={s.main}>
        <ConstructorProvider>
          <BurgerIngredients />
          <BurgerConstructor />
        </ConstructorProvider>
      </section>
    </>
  );
};
