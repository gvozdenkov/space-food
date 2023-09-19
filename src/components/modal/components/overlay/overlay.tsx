import { PropsWithChildren } from 'react';
import { clx } from '#utils/clx';
import { useModalContext } from '#components/modal/context/modal-context';
import s from './overlay.module.scss';

export const Overlay = ({ children }: PropsWithChildren) => {
  const { handleClose } = useModalContext();

  return (
    <div className={clx(s.modalOverlay)} onClick={handleClose}>
      {children}
    </div>
  );
};
