import { useReducer } from 'react';

export const useFetchReducer = (initialData = null) => {
  const initialState = {
    status: 'idle',
    data: initialData,
    error: null,
  };

  function fetchReducer(state, action) {
    switch (action.type) {
      case 'FETCH':
        return {
          ...state,
          status: 'loading',
        };
      case 'RESOLVE':
        return {
          status: 'success',
          data: action.data,
          error: null,
        };
      case 'REJECT':
        return {
          data: null,
          status: 'failure',
          error: action.error,
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  }

  return useReducer(fetchReducer, initialState);
}
