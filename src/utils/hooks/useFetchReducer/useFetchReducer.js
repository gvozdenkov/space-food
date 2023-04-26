import { useReducer } from 'react';
import { serverConfig } from '../../config';
import { actions, fetched, rejected, resolved } from './actions';
import { FETCH_STATUS } from '../../constants';

export const useFetchReducer = (initialData = null) => {
  const initialState = {
    status: FETCH_STATUS.IDLE,
    data: initialData,
    error: null,
  };

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case actions.FETCHED:
        return {
          ...state,
          status: FETCH_STATUS.LOADING,
        };
      case actions.RESOLVED:
        return {
          status: FETCH_STATUS.SUCCESS,
          data: action.data,
          error: null,
        };
      case actions.REJECTED:
        return {
          data: null,
          status: FETCH_STATUS.FAIL,
          error: action.error,
        };
      default:
        throw new Error(`Unknown action type: ${action.type}`);
    }
  };

  const fetchData = async ({ endpoint, options = {}, dispatch }) => {
    const abortController = new AbortController();

    dispatch(fetched());

    try {
      const url = `${serverConfig.baseUrl}/${endpoint}`;
      const res = await fetch(url, {
        headers: serverConfig.headers,
        ...options,
        signal: abortController.signal,
      });

      if (!res.ok) {
        throw new Error(`Request Error: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();

      // Temp for loading preview
      setTimeout(() => {
        dispatch(resolved(data));
      }, 2000);
    } catch (err) {
      if (!abortController.signal.aborted) {
        dispatch(rejected(err));
      }
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  return { state, dispatch, fetchData };
};
