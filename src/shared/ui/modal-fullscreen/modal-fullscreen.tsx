import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';
import { Overlay } from './components';
import { MODAL_PORTAL_EL } from '#shared/config/const';

export const ModalFullScreen = ({ children }: PropsWithChildren) => {
  return createPortal(<Overlay>{children}</Overlay>, MODAL_PORTAL_EL!);
};
