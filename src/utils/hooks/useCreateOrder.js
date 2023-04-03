import { useEffect, useState } from 'react';
import { api } from '../../components/api';

export const useCreateOrder = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await api.createOrder();
        setData(123455);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};
