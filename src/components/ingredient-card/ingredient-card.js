import { Card } from '../card/card';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../services/ingredient-details-slice';
import { ingredientAdded } from '../../services/burger-constructor-slice';
import { selectIngredientById } from '../../services/api/ingredients-api';

export const IngredientCard = ({ ingredientId }) => {
  const dispatch = useDispatch();
  const ingredient = useSelector((state) => selectIngredientById(state, ingredientId));

  const handleImageClick = useCallback(() => {
    dispatch(selected(ingredient));
  }, [dispatch, ingredient]);

  const handleAddClick = useCallback(() => {
    dispatch(ingredientAdded(ingredient));
  }, [ingredient, dispatch]);

  return (
    <Card isDragging={false} productId={ingredientId}>
      <Card.Counter />
      <Card.Image onClick={handleImageClick} />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button onClick={handleAddClick} />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredientId: PropTypes.string.isRequired,
};
