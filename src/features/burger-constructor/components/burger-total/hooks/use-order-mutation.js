import { useMutation } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PATH } from '../../../../../utils/config';
import { UserService } from '../../../../profile';
import { createOrderApi } from '../../../../../app/api-setup';
import { orderReseted } from '../../../services/order-slice';

export const useOrderMutation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: async (ingredients) => {
      const user = await UserService.getMe();

      if (!user) {
        navigate(PATH.LOGIN);
      } else {
        const order = await createOrderApi.post('orders', {
          ingredients,
        });

        return order.data.order;
      }
    },
    onSuccess: ({ number }) => {
      dispatch(orderReseted());
      navigate(`/order/${number}`, { state: { from: location } });
    },
  });
};
