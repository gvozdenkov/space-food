import { useEffect, useReducer } from 'react';
import { serverConfig } from '../../config';
import { requestFailed, requestStarted, requestSuccessful } from './actions';
import { reducer } from './reducer';

export const useFetch = ({ endpoint, options = {} }) => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    let isSubscribed = true;
    const abortController = new AbortController();
    dispatch(requestStarted());

    const fetchData = async () => {
      try {
        const url = `${serverConfig.baseUrl}/${endpoint}`;
        const res = await fetch(url, {
          headers: serverConfig.headers,
          ...options,
          signal: abortController.signal,
        });

        if (!res.ok) {
          throw new Error(`Request Error ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        if (isSubscribed) {
          dispatch(requestSuccessful({ data }));
        }
      } catch (e) {
        if (!abortController.signal.aborted) {
          dispatch(requestFailed({ error: e.message }));
        }
      }
    };

    fetchData();

    return () => {
      isSubscribed = false;
      abortController.abort();
    };
  }, []);

  return state;
};
