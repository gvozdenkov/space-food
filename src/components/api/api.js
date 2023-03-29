import { serverConfig } from '../../utils/config';

const Api = (baseUrl, headers) => {
  const request = async (endpoint, options = {}) => {
    const url = `${baseUrl}/${endpoint}`;
    const res = await fetch(url, {
      headers: headers,
      ...options,
    });
    const json = await res.json();
    return res.ok ? json : Promise.reject(JSON.parse(JSON.stringify(json)));
  };

  const getIngredients = () => {
    return request('ingredients');
  };

  const createOrder = () => {
    return 345436;
  };

  return { getIngredients, createOrder };
};

export const api = Api(serverConfig.baseUrl, serverConfig.headers);
