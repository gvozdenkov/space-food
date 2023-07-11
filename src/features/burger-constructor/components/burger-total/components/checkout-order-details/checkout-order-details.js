import s from './checkout-order-details.module.scss';
import { LoaderShape } from '../../../../../../components/loader-shape';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

export const CheckoutOrderDetails = () => {
  const { t } = useTranslation();

  return (
    <div className={clsx(s.checkoutOrderDetails, 'mt-8')}>
      <LoaderShape />
      <p className='text text_type_main-default mt-10 ellipsis'>
        {t('constructor.createOrder.modal.loading.text')}
      </p>
    </div>
  );
};
