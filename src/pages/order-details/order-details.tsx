import { useLocation, useParams } from 'react-router-dom';
import { clx } from '#shared/lib';
import { Modal } from '#shared/ui/modal';
import { ModalFullScreen } from '#shared/ui/modal-fullscreen';
import { useOrderDetailsQuery } from '#entities/cart';
import { FeedCardDetails } from '#entities/feed';

import s from './order-details.module.scss';

export const OrderDetailsPage = () => {
  const location = useLocation();
  const param = useParams();
  const number = param.number;

  const { data: order } = useOrderDetailsQuery(number!);

  const isFromHome = !!location.state;

  return isFromHome ? (
    <Modal>
      <Modal.Overlay>
        <Modal.Content>
          <Modal.Header>
            <h3 className='text text_type_digits-default'>#{number}</h3>
          </Modal.Header>
          <FeedCardDetails order={order} extraClass='mt-5' />
        </Modal.Content>
      </Modal.Overlay>
    </Modal>
  ) : (
    <ModalFullScreen>
      <div className={s.orderFullScreen}>
        <span className={clx(s.number, 'text text_type_digits-default')}>{`#${number}`}</span>
        <FeedCardDetails order={order} />
      </div>
    </ModalFullScreen>
  );
};
