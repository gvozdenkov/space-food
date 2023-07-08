import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { FormSubmitBtn } from '../../../../components/form/form-submit-btn';
import { ButtonLoader } from '../../../../components/button-loader';
import { Form, useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FormTitle } from '../../../../components/form/form-title';

export const ForgotPasswordForm = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('form.errors.email.incorrect'))
      .required(t('form.errors.input.required')),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema}>
      {({ errors, isValid, touched, dirty }) => (
        <Form method='POST' className='form'>
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
        </Form>
      )}
    </Formik>
  );
};
