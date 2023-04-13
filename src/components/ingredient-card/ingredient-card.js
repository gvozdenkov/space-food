import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';
import { useContext } from 'react';
import { ConstructorContext } from '../../utils/contexts/ConstructorContext';

export const IngredientCard = ({ ingredient }) => {
  // const { setIsOpen, setSelectedIngredient } = useContext(IngredientSelectedContext);
  const { addIngredient } = useContext(ConstructorContext);

  // const handleCardClick = () => {
  //   setSelectedIngredient(ingredient);
  //   setIsOpen(true);
  // };

   return (
    <Card product={ingredient}>
      <Card.Image />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button
          onClick={() => {
            addIngredient(ingredient);
          }}
        />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
