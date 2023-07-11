import { Button as ButtonUI } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCardContext } from './hook/use-card-context';
import { useTranslation } from 'react-i18next';

export const Button = ({ onClick }) => {
  const { t } = useTranslation();
  useCardContext();

  return (
    <ButtonUI htmlType='button' type='secondary' size='medium' extraClass='mt-2' onClick={onClick}>
      {t('ingredientCard.addButton')}
    </ButtonUI>
  );
};
