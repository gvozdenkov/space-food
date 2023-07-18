import { createPortal } from 'react-dom';
import { ModalFullScreenOverlay } from './components/modal-fullscreen-overlay';
import { MODAL_PORTAL_EL } from '../../utils/constants';

export const ModalFullScreen = ({ children }) => {
  return createPortal(<ModalFullScreenOverlay>{children}</ModalFullScreenOverlay>, MODAL_PORTAL_EL);
};
