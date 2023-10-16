import { PropsWithChildren } from 'react';
import { clx } from '#shared/lib';
import { useModalContext } from '../../context/modal-context';

import s from './content.module.scss';

export const Content = ({ children }: PropsWithChildren) => {
  useModalContext();

  return (
    <div
      className={clx(s.modal)}
      role='dialog'
      // aria-labelledby={title ? 'modal-title' : 'modal-title-aria'}
      aria-modal='true'
      onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};
