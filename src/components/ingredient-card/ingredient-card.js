import { Card } from '../card/card';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { bunAdded, ingredientAdded } from '../../features/burger-constructor/services/order-slice';
import { useQuery } from '@tanstack/react-query';
import { ingredientIds } from '../../utils/config';
import { ingredientsQuery } from '../../routes/root-layout/ingredients-loader';

export const IngredientCard = (props) => {
  const { id, attributes, listeners } = props;
  const dispatch = useDispatch();
  const { data: ingredientsObj } = useQuery(ingredientsQuery());
  const selectedIngredient = ingredientsObj[id];

  const handleAddClick = useCallback(() => {
    if (selectedIngredient.type === ingredientIds.BUN) {
      dispatch(bunAdded(id));
    } else {
      dispatch(ingredientAdded(id));
    }
  }, [dispatch, selectedIngredient, id]);

  return (
    <Card productId={id}>
      <Card.Counter />
      <Card.Image id={id} />
      <Card.Info attributes={attributes} listeners={listeners}>
        <Card.Price />
        <Card.Heading />
      </Card.Info>
      <Card.Button onClick={handleAddClick} />
    </Card>
  );
};

IngredientCard.propTypes = {
  id: PropTypes.string.isRequired,
};
