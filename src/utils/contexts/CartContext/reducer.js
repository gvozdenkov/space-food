import { actions } from './actions';

export const reducer = ({ ingredients }, { type, ingredient }) => {
  switch (type) {
    case actions.ADD_INGREDIENT: {
      // Проверить тип добавляемого ингредиента
      const newBuns = ingredient.type === 'bun' ? [ingredient, ingredient] : [];
      if (newBuns) {
        const newIngredients = [...ingredients].map(
          (obj) => newBuns.find((o) => o._id === obj._id) || obj,
        );
        console.log(newIngredients);
        return newIngredients;
      } else {
        const first = [...ingredients].slice(0, -1);
        const last = [...ingredients].pop();
        return {
          ingredients: [...first, ingredient, last],
        };
      }

      // Если это булка, то проверить id первого и последнего инредиента (булки)
      // Если id не совпадают, то заменить 1й и последний ингредиенты
      // Если id совпадают, то вернуть неизменные ingredients
    }

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};
