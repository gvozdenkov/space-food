import { serverConfig } from '../utils/config';

export const api = async ({ endpoint, options = {} }) => {
  const url = `${serverConfig.baseUrl}/${endpoint}`;
  let data;

  try {
    const res = await fetch(url, {
      headers: serverConfig.headers,
      ...options,
    });

    const json = await res.json();

    if (res.ok) {
      return {
        status: res.status,
        data: json.data,
        headers: res.headers,
        url: res.url,
      };
    }

    throw new Error(res.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
};

api.getIngredients = () => {
  return api({ endpoint: 'ingredients' });
};
