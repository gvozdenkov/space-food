import PropTypes from 'prop-types';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export const FormSubmitBtn = ({ children, disabled = false }) => {
  return (
    <Button htmlType='submit' type='primary' size='medium' disabled={disabled}>
      {children}
    </Button>
  );
};

FormSubmitBtn.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  disabled: PropTypes.bool,
};
