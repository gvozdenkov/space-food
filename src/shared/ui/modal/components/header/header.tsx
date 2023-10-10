import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { clx } from '#shared/lib';
import { CloseIcon } from '#shared/ui/icons';
import { useModalContext } from '../../context/modal-context';

import s from './header.module.scss';

export const Header = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();
  const { handleClose } = useModalContext();

  return (
    <div className={clx(s.modal__header)}>
      {children}

      <button
        className={clx(s.modal__closeBtn, 'pl-9')}
        aria-label={t('popup.close')}
        type='button'
        onClick={handleClose}>
        <CloseIcon type='primary' />
      </button>
    </div>
  );
};
