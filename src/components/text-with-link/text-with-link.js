import PropTypes from 'prop-types';
import s from './text-with-link.module.scss';
import clsx from 'clsx';

export const TextWithLink = ({ text, linkText, href, extraClass }) => {
  return (
    <p className={`text text_type_main-default text_color_inactive ${extraClass}`}>
      {text}&nbsp;
      <a href={href} className={clsx(s.link)}>
        {linkText}
      </a>
    </p>
  );
};

TextWithLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
};
