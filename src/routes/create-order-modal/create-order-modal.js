import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '../../components/modal';
import { ModalFullScreen } from '../../components/modal-fullscreen';
import s from './create-order-modal.module.scss';
import { CreateOrderDetails } from '../../features/burger-constructor/components/burger-total/components/create-order-details';

export const CreateOrderModal = () => {
  const { id } = useParams();
  const location = useLocation();

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <CreateOrderDetails number={id} />
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <CreateOrderDetails number={id} />
      </div>
    </ModalFullScreen>
  );
};
