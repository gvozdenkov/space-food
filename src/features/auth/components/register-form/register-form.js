import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';
import { Form, useNavigation } from 'react-router-dom';
import { FormTitle } from '../../../../components/form/form-title';

export const RegisterForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, t('form.errors.name.min')).required(t('form.errors.input.required')),
    email: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    password: Yup.string()
      .min(3, t('form.errors.password.min'))
      .required(t('form.errors.input.required')),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, isValid, touched, dirty }) => (
        <Form method='POST' className='form'>
          <FormTitle>{t('register.form.title')}</FormTitle>
          <Field
            name={'name'}
            type={'text'}
            as={Input}
            placeholder={t('form.placeholder.name')}
            error={touched.name && !!errors.name}
            errorText={touched.name && errors.name}
          />
          <Field
            name={'email'}
            type={'email'}
            as={EmailInput}
            placeholder={t('form.placeholder.email')}
            error={touched.email && !!errors.email}
            errorText={touched.email && errors.email}
          />
          <Field
            name={'password'}
            type={'password'}
            as={Input}
            icon='ShowIcon'
            placeholder={t('form.placeholder.password')}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <FormSubmitBtn disabled={!dirty || !isValid || isLoading}>
            {isLoading ? <ButtonLoader /> : t('register.form.submit')}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
