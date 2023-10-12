import { PropsWithChildren } from 'react';
import { useCardContext } from '../../context/card-context';

import s from './overlay.module.scss';

export const Overlay = ({ children }: PropsWithChildren) => {
  useCardContext();

  return <div className={s.overlay}>{children}</div>;
};
