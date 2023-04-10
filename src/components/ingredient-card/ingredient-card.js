import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';
import { useContext } from 'react';
import { IngredientSelectedContext } from '../../utils/contexts/IngredientSelectedContext';
import { BurgerConstructorContext } from '../../utils/contexts/burgerConstructorContext';

export const IngredientCard = ({ ingredient }) => {
  const { setIsOpen, setSelectedIngredient } = useContext(IngredientSelectedContext);
  const { burgerConstructorItems, setBurgerConstructorItems } =
    useContext(BurgerConstructorContext);

  const handleCardClick = () => {
    setSelectedIngredient(ingredient);
    setIsOpen(true);
  };

  const handleAddClick = (e) => {
    e.stopPropagation();
    setBurgerConstructorItems([
      ...burgerConstructorItems.slice(0, -1),
      ingredient,
      ...burgerConstructorItems.slice(-1),
    ]);
  };

  return (
    <Card product={ingredient} onClick={handleCardClick}>
      <Card.Image />
      <Card.Info>
        <Card.Price />
        <Card.Heading />
        <Card.Button onClick={handleAddClick} />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
