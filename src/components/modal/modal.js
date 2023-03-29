import React, { useState } from 'react';
import s from './modal.module.scss';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import { ModalOverlay } from '../modal-overlay';

export const Modal = ({ tytle, children }) => {
  const [isOpen, setOpen] = useState(true);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {
        <ModalOverlay opened={isOpen}>
          <div
            className={clsx(s.modal, { [s.modal_opened]: isOpen })}
            role="dialog"
            aria-labelledby="edit-profile-form-title"
            aria-modal="true"
          >
            <span className="text text_type_main-large">{tytle}</span>
            <button
              className={clsx(s.modal__closeBtn, 'ml-9')}
              aria-label="Закрыть попап"
              type="button"
              onClick={closeModal}
            >
              {getIcons('primary')['close']}
            </button>
            {children}
          </div>
        </ModalOverlay>
      }
    </>
  );
};
