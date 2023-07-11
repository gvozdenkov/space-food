import React from 'react';
import PropTypes from 'prop-types';

export const FormTitle = ({ children }) => {
  return <h1 className='text text_type_main-medium'>{children}</h1>;
};

FormTitle.propTypes = {
  children: PropTypes.string.isRequired,
};
