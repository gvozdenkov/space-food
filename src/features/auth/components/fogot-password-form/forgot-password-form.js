import s from './forgot-password-form.module.scss';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useNavigation } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState('');

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
  });

  // const handleSubmit = async (values, actions) => {
  //   if (!isLoading && !isFetching) {
  //     try {
  //       const { success } = await forgotPassword(values).unwrap();
  //       navigate(PATH.RESET_PASSWORD, { state: { from: location.pathname } });
  //       if (success) {
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       if (!err.status) {
  //         setErrMsg(intl.formatMessage({ id: 'network.error.noStatus' }));
  //       } else if (err.status === 500 || err.originalStatus === 500) {
  //         setErrMsg(intl.formatMessage({ id: 'network.error.500' }));
  //       } else {
  //         setErrMsg(err.data?.message);
  //       }
  //       errRef.current.focus();
  //     }
  //   }

  //   actions.resetForm();
  // };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, isValid, touched, dirty }) => (
        <Form className='form'>
          <FormTitle>{t('forgot-password.form.title')}</FormTitle>
          <Field
            name={'email'}
            type={'email'}
            as={EmailInput}
            placeholder={t('forgot-form.placeholder.password')}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <FormSubmitBtn disabled={!dirty || !isValid || isLoading}>
            {isLoading ? <ButtonLoader /> : t('forgot-password.submit')}
          </FormSubmitBtn>
          {false && (
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
