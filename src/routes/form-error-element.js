import { useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useRouteError } from 'react-router-dom';

export const FormErrorElement = () => {
  const intl = useIntl();
  const error = useRouteError();
  const errRef = useRef();

  useEffect(() => {
    errRef.current.focus();
  }, []);

  return (
    <p
      ref={errRef}
      aria-live='assertive'
      className='text text_type_main-default text_color_error mt-4'>
      {error?.response?.data?.message
        ? error.response.data.message
        : intl.formatMessage({ id: 'error-page.common.title' })}
    </p>
  );
};
