import React from 'react';
import PropTypes from 'prop-types';
import s from './modal-overlay.module.scss';
import clsx from 'clsx';

export const ModalOverlay = ({ open, setOpen }) => {
  return (
    <div
      className={clsx(s.modalOverlay, { [s.modalOverlayOpened]: open })}
      onClick={() => setOpen(false)}></div>
  );
};

ModalOverlay.propTypes = {
  open: PropTypes.bool,
};
