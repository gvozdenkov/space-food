import s from './app.module.scss';
import { Header } from '../header';
import { Main } from '../main';
import { useIngredients } from '../../utils/hooks/useIngredients';
import { IngredientContext } from '../../utils/contexts/ingredientsContext';
import { Modal } from '../modal';
import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { withLoading } from '../../utils/hoc/withLoading';

export const App = () => {
  const { data, error, loading } = useIngredients();
  const [isOpen, setIsOpen] = useState(false);
  const intl = useIntl();
  const MainWithLoading = withLoading(Main);

  useEffect(() => {
    if (error) setIsOpen(true);
  }, [error]);

  return (
    <div className={s.app}>
      <Header />
      <IngredientContext.Provider value={data}>
        <MainWithLoading
          isLoading={loading}
          // title={intl.formatMessage({ id: 'loading.title' })}
          // text={intl.formatMessage({ id: 'loading.subTitle' })}
        />
      </IngredientContext.Provider>

      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        open={isOpen}
        setOpen={setIsOpen}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    </div>
  );
};
