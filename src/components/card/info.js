import clsx from 'clsx';
import { useCardContext } from './hook/use-card-context';
import s from './info.module.scss';

export const Info = ({ children }) => {
  useCardContext();

  return <footer className={clsx(s.footer, 'mt-1')}>{children}</footer>;
};
