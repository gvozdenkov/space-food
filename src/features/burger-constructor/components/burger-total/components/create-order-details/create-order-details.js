import PropTypes from 'prop-types';
import { LoaderShape } from '../../../../../../components/loader-shape';
import { useTranslation } from 'react-i18next';
import s from './create-order-details.module.scss';
import clsx from 'clsx';

export const CreateOrderDetails = ({ number }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(s.orderDetails)}>
      <p className='text text_type_digits-large'>{number}</p>
      <h1 className='text text_type_main-medium mt-8 mb-15'>{t('checkout.popup.title')}</h1>
      <LoaderShape isDone={true} />
      <p className='text text_type_main-default mt-15 mb-2'>{t('checkout.popup.text1')}</p>
      <p className='text text_type_main-default text_color_inactive'>{t('checkout.popup.text2')}</p>
    </div>
  );
};

CreateOrderDetails.propTypes = {
  number: PropTypes.string,
};
