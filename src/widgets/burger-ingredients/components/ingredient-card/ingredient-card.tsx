import { useTranslation } from 'react-i18next';
import { DraggableAttributes } from '@dnd-kit/core';
import { Card } from '#shared/ui/card';
import { Button } from '#shared/ui/form';
import { clx } from '#shared/lib';

import s from './ingredient-card.module.scss';

type Props = {
  ingredientId: string;
  onClick?: (id: string) => void;
  dragAttributes?: DraggableAttributes;
  dragListeners?: any;
};

export const IngredientCard = ({ ingredientId, onClick, dragAttributes, dragListeners }: Props) => {
  const { t } = useTranslation();

  const addToCartHandler = () => {
    if (typeof onClick === 'function') {
      onClick(ingredientId);
    }
  };

  return (
    <Card productId={ingredientId} extraClass={clx(s.card)}>
      <Card.Counter />
      <Card.Image extraClass={clx(s.image, 'pl-4 pr-4')} />
      <Card.Body
        extraClass={clx(s.body, 'mt-1')}
        dragAttributes={dragAttributes}
        dragListeners={dragListeners}>
        <Card.Price size='default' extraClass={clx(s.price)} />
        <Card.Header extraClass={clx(s.header, 'text text_type_main-default')} />
      </Card.Body>
      <Card.Footer>
        <Button type='button' variant='secondary' onClick={addToCartHandler}>
          {t('ingredientCard.addButton')}
        </Button>
      </Card.Footer>
    </Card>
  );
};
