import { useEffect, useState } from 'react';
import { api } from '../../components/api';

export const useIngredients = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await api.getIngredients();
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  return { data, error, loading };
};
