import { Loading } from '../../components/Loading';
import PropTypes from 'prop-types';

export const withLoading = (Component) => {
  return ({ isLoading, title, text, ...props }) => {
    return isLoading ? <Loading title={title} text={text} /> : <Component {...props} />;
  };
};

withLoading.propTypes = {
  Component: PropTypes.element.isRequired,
};
