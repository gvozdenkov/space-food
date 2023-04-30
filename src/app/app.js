import s from './app.module.scss';
import { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { OrderContextProvider } from '../common/contexts/OrderContext';
import { useGetIngredientsQuery } from '../features/api/api-slice';
import { useIntl } from 'react-intl';
import { Loading } from '../components/Loading';
import { Modal } from '../components/modal';

export const App = () => {
  const intl = useIntl();
  const { isLoading, isSuccess, isError } = useGetIngredientsQuery();
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (isError) setIsOpen(true);
  }, [isError]);

  const content = isLoading ? (
    <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />
  ) : isSuccess ? (
    <OrderContextProvider>
      <Header />
      <main className={s.main}>
        <Main />
      </main>
    </OrderContextProvider>
  ) : (
    isOpen && (
      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        handleClose={close}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    )
  );

  return <div className={s.app}>{content}</div>;
};
