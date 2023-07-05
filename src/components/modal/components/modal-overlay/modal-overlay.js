import PropTypes from 'prop-types';
import s from './modal-overlay.module.scss';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const ModalOverlay = ({ children, onClick }) => {
  return (
    <motion.div
      className={clsx(s.modalOverlay)}
      onClick={onClick}
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

// ModalOverlay.propTypes = {
//   open: PropTypes.bool,
// };
