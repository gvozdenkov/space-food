import { useCardContext } from './hook/use-card-context';
import s from './overlay.module.scss';

export const Overlay = ({ children }) => {
  useCardContext();

  return <div className={s.overlay}>{children}</div>;
};
