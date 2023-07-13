import PropTypes from 'prop-types';
import s from './overlay.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useModalContext } from '../../context/modal-context';

export const Overlay = ({ children }) => {
  const { handleClose } = useModalContext();

  return (
    <motion.div
      className={clsx(s.modalOverlay)}
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.1,
          duration: 0.5,
        },
      }}>
      {children}
    </motion.div>
  );
};

Overlay.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
