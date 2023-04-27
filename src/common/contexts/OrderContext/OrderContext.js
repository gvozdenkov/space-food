import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { addOrderAction } from './actions';
import { reducer } from './reducer';

const OrderContext = createContext();
const OrderDispatchContext = createContext();

export const useOrderContext = () => {
  const context = useContext(OrderContext);

  if (context === undefined) {
    throw new Error('You try to use useOrderContext outside of its provider!');
  }

  return context;
};

export const useOrderDispatchContext = () => {
  const context = useContext(OrderDispatchContext);

  if (context === undefined) {
    throw new Error('You try to use useOrderDispatchContext outside of its provider!');
  }

  return context;
};

export const OrderContextProvider = ({ children }) => {
  const initialState = {
    orders: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addOrder = useCallback((number) => {
    dispatch(addOrderAction(number));
  }, []);

  const dispatchMethods = useMemo(
    () => ({
      addOrder,
    }),
    [addOrder],
  );

  return (
    <OrderContext.Provider value={state}>
      <OrderDispatchContext.Provider value={dispatchMethods}>
        {children}
      </OrderDispatchContext.Provider>
    </OrderContext.Provider>
  );
};
