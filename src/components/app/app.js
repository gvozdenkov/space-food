import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';
import { Loading } from '../Loading';
import { Modal } from '../modal';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';

export const App = () => {
  const { data, error, loading } = useIngredients();
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  return (
    <div className={s.app}>
      <Header />
      <IngredientContext.Provider value={data}>
        
        <Modal
          title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
          open={isOpen}
          setOpen={setIsOpen}>
          <p className='text text_type_main-medium mt-8'>
            {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
          </p>
        </Modal>

        {loading ? <Loading /> : <Main />}
      </IngredientContext.Provider>
    </div>
  );
};
