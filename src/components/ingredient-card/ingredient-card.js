import { Card } from '../card/card';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ingredientAdded } from '../../features/burger-constructor/services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../layouts/root-layout/ingredients-loader';

export const IngredientCard = ({ ingredientId }) => {
  const dispatch = useDispatch();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());

  const handleImageClick = useCallback(() => {
    console.log('open modal for ingredient: ', ingredientId);
  }, [ingredientId]);

  const handleAddClick = useCallback(() => {
    dispatch(ingredientAdded(ingredientsObj[ingredientId]));
  }, [dispatch, ingredientsObj, ingredientId]);

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
