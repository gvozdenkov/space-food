import clsx from 'clsx';
import s from './skeleton.module.scss';

export const Skeleton = ({ classes }) => {
  return <div className={clsx(s.skeleton, s['animate-pulse'], classes)}></div>;
};
