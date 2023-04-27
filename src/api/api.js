import { serverConfig } from '../utils/config';

const request = async ({ endpoint, options = {} }) => {
  const abortController = new AbortController();

  const url = `${serverConfig.baseUrl}/${endpoint}`;
  const res = await fetch(url, {
    headers: serverConfig.headers,
    ...options,
    signal: abortController.signal,
  });

  const json = await res.json();

  return res.ok ? json : Promise.reject(JSON.parse(JSON.stringify(json)));
};

export const getIngredients = () => {
  return request({ endpoint: 'ingredients' });
};
