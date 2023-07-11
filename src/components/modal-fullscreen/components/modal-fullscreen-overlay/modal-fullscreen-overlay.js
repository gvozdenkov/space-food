import s from './modal-fullscreen-overlay.module.scss';
import clsx from 'clsx';

export const ModalFullScreenOverlay = ({ children }) => {
  return <div className={clsx(s.fullScreenModalOverlay)}>{children}</div>;
};
