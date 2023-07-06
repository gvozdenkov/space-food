import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouteError } from 'react-router-dom';

export const FormErrorElement = () => {
  const { t } = useTranslation();
  const error = useRouteError();
  const errRef = useRef();

  useEffect(() => {
    errRef.current.focus();
  }, []);

  return (
    <span ref={errRef} aria-live='assertive'>
      {error?.response?.data?.message ? error.response.data.message : t('error-page.common.title')}
    </span>
  );
};
