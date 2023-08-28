import { IngrediensByTypes } from '#feature/burger-ingredients';

type Props = {
  ingredients: IngrediensByTypes[];
};

export const IngredientList = ({ ingredients }: Props) => {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient.type}>
            <h2>{ingredient.title}</h2>
            <ul>
              {ingredient.list.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};
