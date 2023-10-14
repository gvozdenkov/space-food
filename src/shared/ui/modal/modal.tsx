import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Overlay } from './components/overlay';
import { Content } from './components/content';
import { Header } from './components/header';
import { ModalContext } from './context/modal-context';
import { MODAL_PORTAL_EL } from '#shared/config/const';
import { useEscKey } from './hooks/use-esc-key';

const Modal = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  useEscKey(handleClose);

  return createPortal(
    <ModalContext.Provider value={{ handleClose }}>{children}</ModalContext.Provider>,
    MODAL_PORTAL_EL!,
  );
};

Modal.Overlay = Overlay;
Modal.Content = Content;
Modal.Header = Header;

export { Modal };
