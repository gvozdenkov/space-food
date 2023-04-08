import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';

export const IngredientCard = ({ ingredient }) => {
  return (
    <Card product={ingredient}>
      <Card.Image />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
