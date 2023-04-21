import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';
import { useCartDispatchContext } from '../../utils/contexts/CartContext/CartContext';
import { useIngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext/IngredientSelectedContext';
import { useCallback } from 'react';

export const IngredientCard = ({ ingredient }) => {
  const { addIngredient } = useCartDispatchContext();
  const { setSelectedId } = useIngredientSelectedContext();

  const handleImageClick = useCallback(() => {
    setSelectedId(ingredient._id);
  }, [setSelectedId, ingredient._id]);

  return (
    <Card product={ingredient}>
      <Card.Image onClick={handleImageClick} />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button
          onClick={(e) => {
            addIngredient({ ingredient });
          }}
        />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
