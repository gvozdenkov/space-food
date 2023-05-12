import s from './app.module.scss';
import { Header } from '../components/header';
import { Main } from '../components/main';
import { useIntl } from 'react-intl';
import { Loading } from '../components/loading';
import { Modal } from '../components/modal';
import { useApp } from './useApp';
import { Login } from '../pages/login';
import { Register } from '../pages/register';
import { FogotPassword } from '../pages/fogot-password';
import { ResetPassword } from '../pages/reset-password';

export const App = () => {
  const intl = useIntl();

  const { isLoading, isSuccess, closeErrorModal, isOpenErrorModal } = useApp();

  const content = isLoading ? (
    <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />
  ) : isSuccess ? (
    <>
      <Header />
      <main className={s.main}>
        <ResetPassword />
      </main>
    </>
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
