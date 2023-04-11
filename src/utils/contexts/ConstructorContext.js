import { createContext, useContext, useReducer } from 'react';
import { IngredientContext } from './ingredientsContext';

const initialState = {
  ingredients: [
    {
      _id: '60666c42cc7b410027a1a9b1',
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
    },
    {
      _id: '60666c42cc7b410027a1a9b1',
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
    },
  ],
};

const actions = {
  ADD_INGREDIENT: 'ADD_INGREDIENT',
  REMOVE_INGREDIENT: 'REMOVE_INGREDIENT',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT: {
      const BUN_TYPE = 'bun';
      const BUN_ID = state.ingredients[0]._id;
      // TODO:
      // 1. Проверить тип ингридиента, если это булка, то проверить какая булка сейчас. Если таже, то вернуть исходный массив. Если другая - то заменить все булки на новую.

      if (action.ingredient.type === BUN_TYPE && action.ingredient._id === BUN_ID) {
        console.log('nothing to change');
        return;
      } else if (action.ingredient.type === BUN_TYPE && action.ingredient._id !== BUN_ID) {
        console.log('another bun!');
        return {
          ingredients: [...state.ingredients, action.ingredient],
        };
      }
      // 2.
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

const ConstructorContext = createContext([]);

const ConstructorProvider = ({ children }) => {
  const ingredients = useContext(IngredientContext);
  // console.log(ingredients);

  const buns = ingredients.filter((ingredient) => ingredient.type === 'bun');
  const randomBun = buns[Math.floor(Math.random() * buns.length)];
  // console.log(randomBun);

  // const initialState = {
  //   ingredients: [randomBun, randomBun],
  // };

  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    ingredients: state.ingredients,

    getTotalPrice: () => {
      return [...state.ingredients].reduce((sum, component) => sum + component.price, 0);
    },

    addIngredient: (ingredient) => {
      dispatch({ type: actions.ADD_INGREDIENT, ingredient });
    },
  };

  return <ConstructorContext.Provider value={value}>{children}</ConstructorContext.Provider>;
};

export { ConstructorContext, ConstructorProvider };
// state.ingredient.reduce((sum, component) => sum + component.price, 0);
