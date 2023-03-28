import React from 'react';
import PropTypes from 'prop-types';
import s from './modal-overlay.module.scss';
import clsx from 'clsx';

export const ModalOverlay = ({ children, opened }) => {
  const style = clsx(s.modalOverlay, { [s.modalOverlayOpened]: opened });

  return <div className={style}>{children}</div>;
};

ModalOverlay.propTypes = {
  children: PropTypes.any,
};
