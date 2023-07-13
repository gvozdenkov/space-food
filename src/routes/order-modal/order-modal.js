import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '../../components/modal';
import { ModalFullScreen } from '../../components/modal-fullscreen';
import s from './order-modal.module.scss';
import { OrderDetails } from '../../features/order-feed';
import clsx from 'clsx';

export const OrderModal = () => {
  const { id } = useParams();
  const location = useLocation();

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <Modal.Overlay>
        <Modal.Dialog>
          <Modal.Header>
            <span className='text text_type_digits-default'>{`#${id}`}</span>
          </Modal.Header>
          <OrderDetails number={id} extraClass='mt-5' />
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <span className={clsx(s.number, 'text text_type_digits-default')}>{`#${id}`}</span>
        <OrderDetails number={id} />
      </div>
    </ModalFullScreen>
  );
};
