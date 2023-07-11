import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '../../components/modal';
import { ModalFullScreen } from '../../components/modal-fullscreen';
import { OrderDetails } from '../../features/burger-constructor/components/burger-total/components/order-details';
import s from './order-modal.module.scss';

export const OrderModal = () => {
  const { id } = useParams();
  const location = useLocation();

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <OrderDetails number={id} />
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <OrderDetails number={id} />
      </div>
    </ModalFullScreen>
  );
};
