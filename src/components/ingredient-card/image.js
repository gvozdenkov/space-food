import clsx from 'clsx';
import s from './image.module.scss';

export const Image = ({ image, alt }) => {
  return <img src={image} alt={alt} className={clsx(s.image)} />;
};
