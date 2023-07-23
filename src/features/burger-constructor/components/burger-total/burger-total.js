import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import s from './burger-total.module.scss';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Price } from '../../../../components/price';
import { useBurgerTotal } from './hooks/use-burger-total';
import { ButtonLoader } from '../../../../components/button-loader';
import { ErrorMessage } from '../../../../components/error-message';

export const BurgerTotal = () => {
  const { t } = useTranslation();
  const { onSubmit, isError, error, isLoading, isMinimalOrder, isShowPrice, totalPrice } =
    useBurgerTotal();

  return (
    <>
      <div className={clsx(s.burgerTotal, 'mt-10 pr-4')}>
        {isShowPrice && <Price amount={totalPrice} size='medium' />}
        <form onSubmit={onSubmit}>
          <Button
            type='primary'
            size='medium'
            htmlType='submit'
            extraClass={clsx('ml-10')}
            disabled={isLoading || !isMinimalOrder}>
            {isLoading ? <ButtonLoader /> : t('burgerConstructor.total.button.submit')}
          </Button>
        </form>
      </div>
      {isError && <ErrorMessage message={error} extraClass={clsx(s.error, 'mt-8 mr-4')} />}
    </>
  );
};
