import React from 'react';
import PropTypes from 'prop-types';
import s from './form-view.module.scss';
import clsx from 'clsx';

export const FormView = ({ children }) => {
  return <div className={clsx(s.formView)}>{children}</div>;
};

FormView.propTypes = {
  children: PropTypes.oneOfType([PropTypes.instanceOf(Element), PropTypes.element, PropTypes.node]),
};
