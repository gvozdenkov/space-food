import { useIntl } from 'react-intl';
import { useApp } from '../../app/useApp';
import { Loading } from '../../components/loading';
import { Modal } from '../../components/modal';
import { Main } from '../../components/main';

export const Home = () => {
  const intl = useIntl();

  const { isLoading, isSuccess, closeErrorModal, isOpenErrorModal } = useApp();

  return isLoading ? (
    <Loading text={intl.formatMessage({ id: 'loading.subTitle' })} />
  ) : isSuccess ? (
    <Main />
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
};
