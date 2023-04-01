import { createPortal } from 'react-dom';
import s from './modal.module.scss';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import { ModalOverlay } from '../modal-overlay';
import PropTypes from 'prop-types';
import { MODAL_PORTAL_EL } from '../../utils/config';

export const Modal = ({ title, ariaTitle, children, open, setOpen }) => {
  return createPortal(
    <>
      {
        <ModalOverlay open={open} setOpen={setOpen}>
          <div
            className={clsx(s.modal, { [s.modal_opened]: open })}
            role="dialog"
            aria-labelledby={title ? 'modal-title' : 'modal-title-aria'}
            aria-modal={open ? 'true' : 'false'}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={clsx(s.modal__header)}>
              {!title && (
                <h3 className="sr-only" id="modal-title-aria">
                  {ariaTitle}
                </h3>
              )}
              <h3 className={clsx(s.modal__title, 'text text_type_main-large')} id="modal-title">
                {title}
              </h3>
              <button
                className={clsx(s.modal__closeBtn, 'ml-9')}
                aria-label="Закрыть попап"
                type="button"
                onClick={() => setOpen(false)}
              >
                {getIcons('primary')['close']}
              </button>
            </div>
            {children}
          </div>
        </ModalOverlay>
      }
    </>,
    MODAL_PORTAL_EL
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  ariaTitle: PropTypes.string,
  children: PropTypes.any,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
