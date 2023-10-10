import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '#shared/ui/modal';
import { ModalFullScreen } from '#shared/ui/modal-fullscreen';
import { CreateOrderDetails } from '#entities/cart';

import s from './order-modal.module.scss';

export const OrderModal = () => {
  const location = useLocation();

  const param = useParams();
  const number = Number(param.number);

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <Modal.Overlay>
        <Modal.Content>
          <Modal.Header></Modal.Header>
          <CreateOrderDetails number={number} />
        </Modal.Content>
      </Modal.Overlay>
    </Modal>
  ) : (
    <ModalFullScreen>
      <CreateOrderDetails number={number} extraClass={s.fullScreenModalOverlay__orderDetails} />
    </ModalFullScreen>
  );
};
