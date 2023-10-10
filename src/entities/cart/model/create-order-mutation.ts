import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppDispatch } from '#shared/model/hooks';
import { UserService, createOrderApi } from '#shared/api';
import { ROUTE } from '#shared/config';
import { cartReseted } from './slice';
import { Ingredient } from '#api/ingredients.types';
import { User } from '#shared/api/types';

type CreateOrderRes = {
  success: boolean;
  name: string;
  order: {
    ingredients: Ingredient[];
    _id: string;
    owner: User & {
      createdAt: string;
      updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};

export const useCreateOrderMutation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (ingredients: string[]) => {
      const user = await UserService.getMe();

      if (!user) {
        navigate(ROUTE.LOGIN);
      } else {
        const order = await createOrderApi.post<CreateOrderRes>('orders', {
          ingredients,
        });

        return order.data;
      }
    },
    onSuccess: (res) => {
      const number = res?.order.number;
      if (number) {
        dispatch(cartReseted());
        navigate(`/order/${number}`, { state: { from: location } });
      }
    },
  });
};
