import React, { useState } from 'react';
import s from './modal.module.scss';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import { ModalOverlay } from '../modal-overlay';
import PropTypes from 'prop-types';

export const Modal = ({ title, children, open = false }) => {
  const [isOpen, setOpen] = useState(open);

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
            <div className={clsx(s.modal__header)}>
              <h3 className={clsx(s.modal__title, 'text text_type_main-large')}>{title}</h3>
              <button
                className={clsx(s.modal__closeBtn, 'ml-9')}
                aria-label="Закрыть попап"
                type="button"
                onClick={closeModal}
              >
                {getIcons('primary')['close']}
              </button>
            </div>
            {children}
          </div>
        </ModalOverlay>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  open: PropTypes.bool,
};
