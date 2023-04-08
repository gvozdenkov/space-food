import { useIntl } from 'react-intl';
import { Button as ButtonUI } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCardContext } from './hook/useCardContext';

export const Button = () => {
  const intl = useIntl();
  const context = useCardContext();

  return (
    <ButtonUI htmlType='button' type='secondary' size='medium' extraClass='mt-2'>
      {intl.formatMessage({ id: 'ingredientCard.addButton' })}
    </ButtonUI>
  );
};
