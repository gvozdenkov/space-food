import s from './app.module.scss';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { OrderContextProvider } from '../common/contexts/OrderContext';
import { useIntl } from 'react-intl';
import { Loading } from '../components/Loading';
import { Modal } from '../components/modal';
import { useApp } from './useApp';

export const App = () => {
  const intl = useIntl();

  const { isLoading, isSuccess, closeErrorModal, isOpenErrorModal } = useApp();

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
    isOpenErrorModal && (
      <Modal
        title={intl.formatMessage({ id: 'popup.error.ingrdientsLoading.title' })}
        handleClose={closeErrorModal}>
        <p className='text text_type_main-medium mt-8'>
          {intl.formatMessage({ id: 'popup.error.ingrdientsLoading.message' })}
        </p>
      </Modal>
    )
  );

  return <div className={s.app}>{content}</div>;
};
