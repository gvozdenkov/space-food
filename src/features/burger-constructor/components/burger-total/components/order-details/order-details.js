import PropTypes from 'prop-types';
import { LoaderShape } from '../../../../../../components/loader-shape';
import { useTranslation } from 'react-i18next';

export const OrderDetails = ({ orderNumber }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className='text text_type_digits-large'>{orderNumber}</p>
      <p className='text text_type_main-medium mt-8 mb-15'>{t('checkout.popup.title')}</p>
      <LoaderShape isDone={true} />
      <p className='text text_type_main-default mt-15 mb-2'>{t('checkout.popup.text1')}</p>
      <p className='text text_type_main-default text_color_inactive'>{t('checkout.popup.text2')}</p>
    </>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
