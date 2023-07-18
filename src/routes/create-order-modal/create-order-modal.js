import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '../../components/modal';
import { ModalFullScreen } from '../../components/modal-fullscreen';
import s from './create-order-modal.module.scss';
import { CreateOrderDetails } from '../../features/burger-constructor';

export const CreateOrderModal = () => {
  const { id } = useParams();
  const location = useLocation();

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <Modal.Overlay>
        <Modal.Dialog>
          <Modal.Header>&nbsp;</Modal.Header>
          <CreateOrderDetails number={id} />
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <CreateOrderDetails number={id} />
      </div>
    </ModalFullScreen>
  );
};
