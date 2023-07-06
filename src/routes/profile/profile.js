import s from './profile.module.scss';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form, useNavigation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { selectUser } from '../../features/user';
import { FormSubmitBtn } from '../../components/form/components/form-submit-btn';
import { ButtonLoader } from '../../components/button-loader';
import { useEffect } from 'react';

export const Profile = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting' || navigation.state === 'loading';

  const user = useSelector(selectUser);

  const formRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const initialValues = {
    name: user?.name,
    email: user?.email,
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

  const onIconClick = (ref) => {
    setTimeout(() => {
      ref.current.focus();
      ref.current.select();
    }, 0);
  };

  const FocusInputControl = ({ innerRef, ...props }) => <Input ref={innerRef} {...props} />;

  return (
    <>
      <section className={clsx(s.profile)}>
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          {({ errors, isValid, touched, dirty, handleReset }) => (
            <Form method='POST' className={clsx(s.form)} ref={formRef}>
              <Field
                name={'name'}
                type={'text'}
                as={FocusInputControl}
                icon={'EditIcon'}
                innerRef={nameRef}
                onIconClick={() => onIconClick(nameRef)}
                extraClass={clsx(s.input_name)}
                placeholder={t('form.placeholder.name')}
                error={touched.name && !!errors.name}
                errorText={touched.name && errors.name}
              />
              <Field
                name={'email'}
                type={'email'}
                as={FocusInputControl}
                icon={'EditIcon'}
                innerRef={emailRef}
                onIconClick={() => onIconClick(emailRef)}
                extraClass={clsx(s.input_email)}
                placeholder={t('form.placeholder.email')}
                error={touched.email && !!errors.email}
                errorText={touched.email && errors.email}
              />
              <Field
                name={'password'}
                type={'password'}
                as={FocusInputControl}
                icon={'EditIcon'}
                innerRef={passwordRef}
                onIconClick={() => onIconClick(passwordRef)}
                extraClass={clsx(s.input_pwd)}
                placeholder={t('form.placeholder.password')}
                error={touched.password && !!errors.password}
                errorText={touched.password && errors.password}
              />

              {dirty && (
                <>
                  <FormSubmitBtn disabled={!isValid} extraClass={clsx(s.input_submit)}>
                    {isSubmitting ? <ButtonLoader /> : t('profile.form.submit')}
                  </FormSubmitBtn>
                  <Button
                    type='secondary'
                    htmlType='reset'
                    extraClass={clsx(s.input_cancel)}
                    onClick={handleReset}>
                    {t('profile.form.cancel')}
                  </Button>
                </>
              )}
            </Form>
          )}
        </Formik>
      </section>
      <p className={clsx(s.comment, 'text text_type_main-default text_color_inactive')}>
        {t('profile.comment')}
      </p>
    </>
  );
};
