import { useTranslation } from 'react-i18next';
import { SubmitButton } from '#shared/ui/form';
import { clx } from '#shared/lib';

type Props = {
  extraClass?: string;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Checkout = ({ disabled, isLoading = false, extraClass = '' }: Props) => {
  const { t } = useTranslation();

  return (
    <SubmitButton
      isLoading={isLoading}
      extraClass={clx({ [extraClass]: !!extraClass })}
      disabled={disabled}>
      {t('burgerConstructor.total.button.submit')}
    </SubmitButton>
  );
};
