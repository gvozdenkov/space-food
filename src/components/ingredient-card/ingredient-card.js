import { Card } from '../card/card';
import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../services/ingredient-details-slice';
import { ingredientAdded } from '../../services/burger-constructor-slice';

export const IngredientCard = ({ ingredientId }) => {
  const dispatch = useDispatch();
  let ingredient = {
    _id: '643d69a5c3f7b9001cfa093c',
    name: 'Краторная булка N-200i',
    type: 'bun',
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: 'https://code.s3.yandex.net/react/code/bun-02.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
    __v: 0,
  };

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
