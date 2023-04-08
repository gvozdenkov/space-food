import clsx from 'clsx';
import s from './footer.module.scss';

export const Info = ({ children }) => {
  return <footer className={clsx(s.footer)}>{children}</footer>;
};
