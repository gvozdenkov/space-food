import PropTypes from 'prop-types';
import s from './loader-shape.module.scss';
import clsx from 'clsx';

export const LoaderShape = ({ isDone = false }) => {
  return (
    <div className={clsx(s.loader, 'p-5')}>
      {isDone && <div className={clsx(s.icon, s.check)}></div>}
      <div className={clsx(s.icon, s.shapeA)}></div>
      <div className={clsx(s.icon, s.shapeB)}></div>
      <div className={clsx(s.icon, s.shapeC)}></div>
    </div>
  );
};

LoaderShape.propTypes = {
  isDone: PropTypes.bool,
};
