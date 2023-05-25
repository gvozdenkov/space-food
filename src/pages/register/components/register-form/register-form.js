import s from './register-form.module.scss';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { useCreateUserMutation } from '../../../../services/api-slice';
import { ButtonLoader } from '../../../../components/button-loader';

export const RegisterForm = () => {
  const intl = useIntl();
  const [createUser, { isLoading, isFetching, isSuccess, isError, error, data: newUser }] =
    useCreateUserMutation();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, intl.formatMessage({ id: 'form.errors.name.min' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
    email: Yup.string()
      .email(intl.formatMessage({ id: 'form.errors.email.incorrect' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
    password: Yup.string()
      .min(7, intl.formatMessage({ id: 'form.errors.password.min' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
  });

  const handleSubmit = async (values, actions) => {
    if (!isLoading && !isFetching) {
      try {
        await createUser(values).unwrap();
      } catch (err) {
        console.error('Failed to create the user: ', err);
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
          <FormTitle>{intl.formatMessage({ id: 'register.form.title' })}</FormTitle>
          <Field
            name={'name'}
            type={'text'}
            as={Input}
            placeholder={intl.formatMessage({ id: 'form.placeholder.name' })}
            error={touched.name && !!errors.name}
            errorText={touched.name && errors.name}
          />
          <Field
            name={'email'}
            type={'email'}
            as={EmailInput}
            placeholder={intl.formatMessage({ id: 'form.placeholder.email' })}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <Field
            name={'password'}
            type={'password'}
            as={Input}
            icon='ShowIcon'
            placeholder={intl.formatMessage({ id: 'form.placeholder.password' })}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <FormSubmitBtn disabled={!dirty || !isValid || isLoading}>
            {isLoading ? <ButtonLoader /> : intl.formatMessage({ id: 'register.form.submit' })}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};