import { PropsWithChildren } from 'react';
import { clx } from '#shared/lib';
import s from './overlay.module.scss';

export const Overlay = ({ children }: PropsWithChildren) => {
  return <div className={clx(s.fullScreenModalOverlay)}>{children}</div>;
};
