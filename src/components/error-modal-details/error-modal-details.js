import clsx from 'clsx';
import PropTypes from 'prop-types';
import s from './error-modal-details.module.scss';

export const ErrorModalDetails = ({ error, message }) => {
  return (
    <>
      <p className='text text_type_main-medium mt-8'>{error}</p>
      <p className={clsx(s.message, 'text text_type_main-default mt-15')}>{message}</p>
    </>
  );
};

ErrorModalDetails.propTypes = {
  error: PropTypes.string.isRequired,
  message: PropTypes.string,
};
