import clsx from 'clsx';
import s from './dialog.module.scss';
import { motion } from 'framer-motion';
import { useModalContext } from '../context/modal-context';

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

export const Dialog = ({ children }) => {
  useModalContext();

  return (
    <motion.div
      className={clsx(s.modal)}
      role='dialog'
      // aria-labelledby={title ? 'modal-title' : 'modal-title-aria'}
      aria-modal='true'
      onClick={(e) => e.stopPropagation()}
      variants={dropIn}
      initial='hidden'
      animate='visible'
      exit='exit'>
      {children}
    </motion.div>
  );
};
