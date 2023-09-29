import { PropsWithChildren } from 'react';
import { clx } from '#shared/lib';
import { useModalContext } from '#shared/modal/context/modal-context';
import s from './overlay.module.scss';

export const Overlay = ({ children }: PropsWithChildren) => {
  const { handleClose } = useModalContext();

  return (
    <div className={clx(s.modalOverlay)} onClick={handleClose}>
      {children}
    </div>
  );
};
