import { useTranslation } from 'react-i18next';
import { SubmitButton } from '#shared/ui/form';
import { clx } from '#shared/lib';

type Props = {
  extraClass?: string;
};

export const Checkout = ({ extraClass = '' }: Props) => {
  const { t } = useTranslation();
  return (
    <SubmitButton extraClass={clx({ [extraClass]: !!extraClass })}>
      {t('burgerConstructor.total.button.submit')}
    </SubmitButton>
  );
};
