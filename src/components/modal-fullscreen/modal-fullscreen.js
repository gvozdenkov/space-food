import { createPortal } from 'react-dom';
import { ModalFullScreenOverlay } from './components/modal-fullscreen-overlay';
import { MODAL_PORTAL_EL } from '../../utils/constants';

export const ModalFullScreen = ({ children, title }) => {
  return createPortal(
    <ModalFullScreenOverlay>
      <h1 className='mt-30 text text_type_main-large'>{title}</h1>
      {children}
    </ModalFullScreenOverlay>,
    MODAL_PORTAL_EL,
  );
};
