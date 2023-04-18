import { Card } from '../card/card';
import { ingredientPropTypes } from '../../utils/config';
import { useCartDispatchContext } from '../../utils/contexts/CartContext/CartContext';

export const IngredientCard = ({ ingredient }) => {
  // const { setIsOpen, setSelectedIngredient } = useContext(IngredientSelectedContext);
  const { addIngredient } = useCartDispatchContext();

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
            addIngredient({ ingredient });
          }}
        />
      </Card.Info>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
};
