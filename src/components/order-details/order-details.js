import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { LoaderShape } from '../LoaderShape';

export const OrderDetails = ({ orderNumber }) => {
  const intl = useIntl();

  return (
    <>
      <p className='text text_type_digits-large'>{orderNumber}</p>
      <p className='text text_type_main-medium mt-8 mb-15'>
        {intl.formatMessage({ id: 'checkout.popup.title' })}
      </p>
      <LoaderShape isDone={true} />
      <p className='text text_type_main-default mt-15 mb-2'>
        {intl.formatMessage({ id: 'checkout.popup.text1' })}
      </p>
      <p className='text text_type_main-default text_color_inactive'>
        {intl.formatMessage({ id: 'checkout.popup.text2' })}
      </p>
    </>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number,
};
