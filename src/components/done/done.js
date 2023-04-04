import s from './done.module.scss';
import clsx from 'clsx';

export const Done = () => {
  return (
    <div className={clsx(s.done, 'p-5')}>
      <div className={clsx(s.done__icon, s.check)}></div>
      <div className={clsx(s.done__icon, s.shapeA)}></div>
      <div className={clsx(s.done__icon, s.shapeB)}></div>
      <div className={clsx(s.done__icon, s.shapeC)}></div>
    </div>
  );
};
