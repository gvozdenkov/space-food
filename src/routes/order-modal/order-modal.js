import { useLocation, useParams } from 'react-router-dom';
import { Modal } from '../../components/modal';
import { ModalFullScreen } from '../../components/modal-fullscreen';
import s from './order-modal.module.scss';
import { OrderDetails } from '../../features/feed';
import clsx from 'clsx';
import { useQuery } from '@tanstack/react-query';
import { orderDetailsQuery } from './order-modal-loader';

export const OrderModal = () => {
  const { number } = useParams();
  const location = useLocation();

  const { data: order } = useQuery(orderDetailsQuery(number));

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <Modal.Overlay>
        <Modal.Dialog>
          <Modal.Header>
            <span className='text text_type_digits-default'>{`#${number}`}</span>
          </Modal.Header>
          <OrderDetails order={order} extraClass='mt-5' />
        </Modal.Dialog>
      </Modal.Overlay>
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <span className={clsx(s.number, 'text text_type_digits-default')}>{`#${number}`}</span>
        <OrderDetails order={order} />
      </div>
    </ModalFullScreen>
  );
};
