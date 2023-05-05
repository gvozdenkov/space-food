import { Card } from '../card/card';
import { DragTypes, ingredientPropTypes } from '../../utils/config';
import { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { selected } from '../../services/ingredient-details-slice';
import { ingredientAdded } from '../../services/burger-constructor-slice';
import { useDrag } from 'react-dnd';

export const IngredientCard = memo(({ ingredient }) => {
  const dispatch = useDispatch();

  const handleImageClick = useCallback(() => {
    dispatch(selected(ingredient));
  }, [dispatch, ingredient]);

  const handleAddClick = useCallback(() => {
    dispatch(ingredientAdded(ingredient));
  }, [ingredient, dispatch]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DragTypes.INGREDIENT,
    item: { id: ingredient._id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} isDragging={isDragging} product={ingredient}>
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
