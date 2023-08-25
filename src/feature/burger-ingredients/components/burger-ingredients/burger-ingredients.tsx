import { useGetIngredientsQuery } from '#feature/burger-ingredients';

export const BurgerIngredients = () => {
  const { data } = useGetIngredientsQuery();

  const { ingredientsArray } = data!;
  return (
    <section>
      <h1>Ingredients</h1>
      <ul>
        {ingredientsArray.map((ingredient) => (
          <li key={ingredient._id}>{ingredient.name}</li>
        ))}
      </ul>
    </section>
  );
};
