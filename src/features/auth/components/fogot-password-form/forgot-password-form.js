import s from './forgot-password-form.module.scss';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../../../utils/config';
import { useForgotPasswordMutation } from '../../../../services/api/reset-api';
import { useRef, useState } from 'react';

export const ForgotPasswordForm = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const location = useLocation();
  const [forgotPassword, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useForgotPasswordMutation();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'form.errors.email.incorrect' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
  });

  const handleSubmit = async (values, actions) => {
    if (!isLoading && !isFetching) {
      try {
        const { success } = await forgotPassword(values).unwrap();
        navigate(PATH.RESET_PASSWORD, { state: { from: location.pathname } });
        if (success) {
        }
      } catch (err) {
        console.log(err);
        if (!err.status) {
          setErrMsg(intl.formatMessage({ id: 'network.error.noStatus' }));
        } else if (err.status === 500 || err.originalStatus === 500) {
          setErrMsg(intl.formatMessage({ id: 'network.error.500' }));
        } else {
          setErrMsg(err.data?.message);
        }
        errRef.current.focus();
      }
    }

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, isValid, touched, dirty }) => (
        <Form className='form'>
          <FormTitle>{intl.formatMessage({ id: 'forgot-password.form.title' })}</FormTitle>
          <Field
            name={'email'}
            type={'email'}
            as={EmailInput}
            placeholder={intl.formatMessage({ id: 'forgot-form.placeholder.password' })}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <FormSubmitBtn disabled={!dirty || !isValid || isLoading}>
            {isLoading ? <ButtonLoader /> : intl.formatMessage({ id: 'forgot-password.submit' })}
          </FormSubmitBtn>
          {isError && (
            <p
              ref={errRef}
              aria-live='assertive'
              className='text text_type_main-default text_color_error mt-4'>
              {errMsg}
            </p>
          )}
        </Form>
      )}
    </Formik>
  );
};
