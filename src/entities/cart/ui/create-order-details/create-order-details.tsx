import { useTranslation } from 'react-i18next';
import { clx } from '#shared/lib';
import { LoaderShape } from '#shared/ui/loader-shape';
import s from './create-order-details.module.scss';

type Props = {
  number: number;
  extraClass?: string;
};
export const CreateOrderDetails = ({ number, extraClass = '' }: Props) => {
  const { t } = useTranslation();

  return (
    <div className={clx(s.orderDetails, { [extraClass]: !!extraClass })}>
      <p className='text text_type_digits-large'>{number}</p>
      <h1 className='text text_type_main-medium mt-8 mb-15'>
        {t('burgerConstructor.createOrderDetails.title')}
      </h1>
      <LoaderShape isDone={true} />
      <p className='text text_type_main-default mt-15 mb-2'>
        {t('burgerConstructor.createOrderDetails.text1')}
      </p>
      <p className='text text_type_main-default text_color_inactive'>
        {t('burgerConstructor.createOrderDetails.text2')}
      </p>
    </div>
  );
};
