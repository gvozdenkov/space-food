import clsx from 'clsx';
import s from './ingredient-image.module.scss';

export const IngredeintImage = ({ image, alt }) => {
  return <img src={image} alt={alt} className={clsx(s.image)} />;
};
