import PropTypes from 'prop-types';
import s from './text-with-link.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

export const TextWithLink = ({ text, linkText, href, extraClass }) => {
  return (
    <p className={`text text_type_main-default text_color_inactive ${extraClass}`}>
      {text}&nbsp;
      <Link to={href} className={clsx(s.link)}>
        {linkText}
      </Link>
    </p>
  );
};

TextWithLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};
