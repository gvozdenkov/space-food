import React from 'react';
import PropTypes from 'prop-types';
import s from './form-submit-btn.module.scss';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const FormSubmitBtn = ({ children, disabled = false }) => {
  return (
    <Button htmlType='submit' type='primary' size='medium' disabled={disabled}>
      {children}
    </Button>
  );
};

FormSubmitBtn.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
