import { createPortal } from 'react-dom';
import { Overlay } from './components/overlay';
import PropTypes from 'prop-types';
import { MODAL_PORTAL_EL } from '../../utils/constants';
import { useEscKey } from './hooks/useEscKey';
import { useNavigate } from 'react-router-dom';
import { ModalContext } from './context/modal-context';
import { Header } from './components/header';
import { Dialog } from './dialog';

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  useEscKey(handleClose);

  return createPortal(
    <ModalContext.Provider value={{ handleClose }}>{children}</ModalContext.Provider>,
    MODAL_PORTAL_EL,
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  ariaTitle: PropTypes.string,
  children: PropTypes.node,
};

Modal.Overlay = Overlay;
Modal.Dialog = Dialog;
Modal.Header = Header;

export { Modal };
