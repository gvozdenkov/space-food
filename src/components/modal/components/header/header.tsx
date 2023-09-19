import { PropsWithChildren } from 'react';
import { useModalContext } from '#components/modal/context/modal-context';
import { clx } from '#utils/clx';
import s from './header.module.scss';
import { CloseIcon } from '#components/icons';
import { useTranslation } from 'react-i18next';

export const Header = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  const { handleClose } = useModalContext();

  return (
    <div className={clx(s.modal__header)}>
      {children}

      <button
        className={clx(s.modal__closeBtn, 'ml-9')}
        aria-label={t('popup.close')}
        type='button'
        onClick={handleClose}>
        <CloseIcon type='primary' />
      </button>
    </div>
  );
};
