import clsx from 'clsx';
import s from './header.module.scss';
import { useModalContext } from '../../context/modal-context';
import { getIcons } from '../../../../utils';

export const Header = ({ children }) => {
  const { handleClose } = useModalContext();

  return (
    <div className={clsx(s.modal__header)}>
      {children}

      <button
        className={clsx(s.modal__closeBtn, 'ml-9')}
        aria-label='Закрыть попап'
        type='button'
        onClick={handleClose}>
        {getIcons('primary')['close']}
      </button>
    </div>
  );
};
