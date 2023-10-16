import { clx } from '#shared/lib';

import s from './loader-shape.module.scss';

type LoaderShapeProps = {
  isDone?: boolean;
};

export const LoaderShape = ({ isDone = false }: LoaderShapeProps) => {
  return (
    <div className={clx(s.loader, 'p-5')}>
      {isDone && <div className={clx(s.icon, s.check)}></div>}
      <div className={clx(s.icon, s.shapeA)}></div>
      <div className={clx(s.icon, s.shapeB)}></div>
      <div className={clx(s.icon, s.shapeC)}></div>
    </div>
  );
};
