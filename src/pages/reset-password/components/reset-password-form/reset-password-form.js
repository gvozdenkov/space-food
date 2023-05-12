import s from './reset-password-form.module.scss';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';

export const ResetPasswordForm = () => {
  const intl = useIntl();

  const initialValues = {
    password: '',
    pin: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(7, intl.formatMessage({ id: 'form.errors.password.min' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
    pin: Yup.string().required(intl.formatMessage({ id: 'form.errors.input.required' })),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ errors, isValid, touched, dirty }) => (
        <Form className='form'>
          <FormTitle>{intl.formatMessage({ id: 'reset-password.form.title' })}</FormTitle>
          <Field
            name={'password'}
            type={'password'}
            icon={'ShowIcon'}
            as={Input}
            placeholder={intl.formatMessage({ id: 'reset-form.placeholder.password' })}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <Field
            name={'pin'}
            type={'text'}
            as={EmailInput}
            placeholder={intl.formatMessage({ id: 'reset-form.placeholder.pin' })}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <FormSubmitBtn disabled={!dirty || !isValid}>
            {intl.formatMessage({ id: 'reset-form.submit' })}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
