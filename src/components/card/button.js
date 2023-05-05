import { useIntl } from 'react-intl';
import { Button as ButtonUI } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCardContext } from './hook/use-card-context';

export const Button = ({ onClick }) => {
  const intl = useIntl();
  useCardContext();

  return (
    <ButtonUI htmlType='button' type='secondary' size='medium' extraClass='mt-2' onClick={onClick}>
      {intl.formatMessage({ id: 'ingredientCard.addButton' })}
    </ButtonUI>
  );
};
