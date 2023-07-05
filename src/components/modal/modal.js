import { createPortal } from 'react-dom';
import s from './modal.module.scss';
import clsx from 'clsx';
import { getIcons } from '../../utils';
import { ModalOverlay } from './components/modal-overlay';
import PropTypes from 'prop-types';
import { MODAL_PORTAL_EL } from '../../utils/constants';
import { useEscKey } from './useEscKey';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const dropIn = {
  hidden: {
    y: '-80px',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 28,
      stiffness: 400,
    },
  },
  exit: {
    y: '80px',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export const Modal = ({ title, ariaTitle, children }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  useEscKey(handleClose);

  return createPortal(
    <ModalOverlay onClick={handleClose}>
      <motion.div
        className={clsx(s.modal)}
        role='dialog'
        aria-labelledby={title ? 'modal-title' : 'modal-title-aria'}
        aria-modal='true'
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'>
        <div className={clsx(s.modal__header)}>
          {!title && (
            <h3 className='sr-only' id='modal-title-aria'>
              {ariaTitle}
            </h3>
          )}
          <h3 className={clsx(s.modal__title, 'text text_type_main-large')} id='modal-title'>
            {title}
          </h3>
          <button
            className={clsx(s.modal__closeBtn, 'ml-9')}
            aria-label='Закрыть попап'
            type='button'
            onClick={handleClose}>
            {getIcons('primary')['close']}
          </button>
        </div>
        <div className={clsx(s.content, 'mt-4')}>{children}</div>
      </motion.div>
    </ModalOverlay>,
    MODAL_PORTAL_EL,
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  ariaTitle: PropTypes.string,
  children: PropTypes.node,
};
