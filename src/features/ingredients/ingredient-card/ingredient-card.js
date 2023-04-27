import { Card } from '../../../components/card/card';
import { ingredientPropTypes } from '../../../utils/config';
import { useCartDispatchContext } from '../../../common/contexts/CartContext/CartContext';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { selected } from '../../ingredient-details/ingredient-details-slice';

export const IngredientCard = memo(({ ingredient }) => {
  const { addIngredient } = useCartDispatchContext();
  const dispatch = useDispatch();

  const handleImageClick = useCallback(() => {
    dispatch(selected(ingredient));
  }, [dispatch, ingredient]);

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
