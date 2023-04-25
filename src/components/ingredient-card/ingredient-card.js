import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';
import { useCartDispatchContext } from '../../utils/contexts/CartContext/CartContext';
import { useIngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext/IngredientSelectedContext';
import { memo, useCallback } from 'react';

export const IngredientCard = memo(({ ingredient }) => {
  const { addIngredient } = useCartDispatchContext();
  const { setSelectedId } = useIngredientSelectedContext();

  const handleImageClick = useCallback(() => {
    setSelectedId(ingredient._id);
  }, [setSelectedId, ingredient._id]);

  const handleAddClick = useCallback(() => {
    addIngredient({ ingredient });
  }, [addIngredient, ingredient]);

  return (
    <Card product={ingredient}>
      <Card.Counter />
      <Card.Image onClick={handleImageClick} />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button onClick={handleAddClick} />
      </Card.Info>
    </Card>
  );
});

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
