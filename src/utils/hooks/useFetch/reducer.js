import { actions } from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.REQUEST_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case actions.REQUEST_SUCCESSFUL:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.data,
      };
    case actions.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
