import { createPortal } from 'react-dom';
import { PropsWithChildren } from 'react';
import { MODAL_PORTAL_EL } from '#constants/layout';
import { Overlay } from './components';

export const ModalFullScreen = ({ children }: PropsWithChildren) => {
  return createPortal(<Overlay>{children}</Overlay>, MODAL_PORTAL_EL!);
};
