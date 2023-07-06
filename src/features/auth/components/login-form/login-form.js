import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Form, useNavigation } from 'react-router-dom';
import { EmailInput, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormTitle } from '../../../../components/form/components/form-title';
import { FormSubmitBtn } from '../../../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { useTranslation } from 'react-i18next';

export const LoginForm = ({ redirectTo }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting' || navigation.state === 'loading';

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
    password: Yup.string().required(t('form.errors.input.required')),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, isValid, touched, dirty }) => (
        <Form method='POST' className='form'>
          <FormTitle>{t('login.form.title')}</FormTitle>
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
            icon={'ShowIcon'}
            as={Input}
            placeholder={t('form.placeholder.password')}
            error={touched.password && !!errors.password}
            errorText={touched.password && errors.password}
          />
          <input type='hidden' id='path' value={redirectTo} name='redirectTo' />
          <FormSubmitBtn disabled={!dirty || !isValid}>
            {isSubmitting ? <ButtonLoader /> : t('login.form.submit')}
          </FormSubmitBtn>
        </Form>
      )}
    </Formik>
  );
};
