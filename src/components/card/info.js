import clsx from 'clsx';
import { useCardContext } from './hook/use-card-context';
import s from './info.module.scss';

export const Info = (props) => {
  const { children, attributes, listeners } = props;
  useCardContext();

  return (
    <footer {...attributes} {...listeners} className={clsx(s.footer, 'mt-1')}>
      {children}
    </footer>
  );
};
