import { Card } from '../card/card';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bunAdded, ingredientAdded } from '../../features/burger-constructor/services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientsQuery } from '../../layouts/root-layout/ingredients-loader';
import { ingredientIds } from '../../utils/config';

export const IngredientCard = ({ id }) => {
  const dispatch = useDispatch();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const selectedIngredient = ingredientsObj[id];

  const handleAddClick = useCallback(() => {
    const price = ingredientsObj[id].price;

    if (selectedIngredient.type === ingredientIds.BUN) {
      dispatch(bunAdded(id, price));
    } else {
      dispatch(ingredientAdded(id, price));
    }
  }, [dispatch, selectedIngredient, ingredientsObj, id]);

  return (
    <Card isDragging={false} productId={id}>
      <Card.Counter />
      <Card.Image id={id} />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button onClick={handleAddClick} />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  id: PropTypes.string.isRequired,
};
