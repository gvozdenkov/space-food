import s from './login-form.module.scss';
import { useIntl } from 'react-intl';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useLoginUserMutation } from '../../../../services/api-slice';
import { useDispatch } from 'react-redux';
import { userLogedIn } from '../../../../services/auth-slice';
import { LOCAL_STORAGE } from '../../../../utils/config';

export const LoginForm = () => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isFetching, isSuccess, isError, error, data }] =
    useLoginUserMutation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(intl.formatMessage({ id: 'form.errors.email.incorrect' }))
      .required(intl.formatMessage({ id: 'form.errors.input.required' })),
    password: Yup.string().required(intl.formatMessage({ id: 'form.errors.input.required' })),
  });

  const handleSubmit = async (values, actions) => {
    if (!isLoading && !isFetching) {
      try {
        const userRaw = await loginUser(values).unwrap();
        const user = {
          accessToken: userRaw.accessToken,
          refreshToken: userRaw.refreshToken,
          user: {
            name: userRaw.user.name,
            email: userRaw.user.email,
          },
        };
        console.log('user', user);
        localStorage.setItem(LOCAL_STORAGE.USER, JSON.stringify(user));
        dispatch(userLogedIn(user));
      } catch (err) {
        console.error('Failed to login: ', err);
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
          <FormTitle>{intl.formatMessage({ id: 'login.form.title' })}</FormTitle>
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
            icon={'ShowIcon'}
            as={Input}
            placeholder={intl.formatMessage({ id: 'form.placeholder.password' })}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <FormSubmitBtn disabled={!dirty || !isValid}>
            {isLoading ? <ButtonLoader /> : intl.formatMessage({ id: 'login.form.submit' })}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
