import s from './reset-password-form.module.scss';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ResetPasswordForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || 'submitting';

  const initialValues = {
    password: '',
    token: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(3, t('form.errors.password.min'))
      .required(t('form.errors.input.required')),
    token: Yup.string().required(t('form.errors.input.required')),
  });

  // const handleSubmit = async (values, actions) => {
  //   if (!isLoading && !isFetching) {
  //     try {
  //       const { success } = await resetPassword(values).unwrap();
  //       console.log(success);
  //       if (success) {
  //         navigate(PATH.LOGIN, { replace: true });
  //       }
  //     } catch (err) {
  //       console.error('Failed to send forgot password request: ', err);
  //     }
  //   }

  //   actions.resetForm();
  // };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, isValid, touched, dirty }) => (
        <Form className='form'>
          <FormTitle>{t('reset-password.form.title')}</FormTitle>
          <Field
            name={'password'}
            type={'password'}
            icon={'ShowIcon'}
            as={Input}
            placeholder={t('reset-form.placeholder.password')}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <Field
            name={'token'}
            type={'text'}
            as={EmailInput}
            placeholder={t('reset-form.placeholder.token')}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <FormSubmitBtn disabled={!dirty || !isValid || isLoading}>
            {isLoading ? <ButtonLoader /> : t('reset-form.submit')}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
