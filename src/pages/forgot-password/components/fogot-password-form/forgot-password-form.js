import s from './forgot-password-form.module.scss';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { useForgotPasswordMutation } from '../../../../services/api/api';
import { ButtonLoader } from '../../../../components/button-loader';

export const ForgotPasswordForm = () => {
  const intl = useIntl();
  const [forgotPassword, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useForgotPasswordMutation();

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
        await forgotPassword(values).unwrap();
      } catch (err) {
        console.error('Failed to send forgot password request: ', err);
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
        </Form>
      )}
    </Formik>
  );
};
