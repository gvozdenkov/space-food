import { useQuery } from '@tanstack/react-query';
import { useWebSocket } from '../../../hooks/use-websocket';
import { useMemo } from 'react';
import { orderStatusIds } from '../../../utils/config';

export const useFeed = ({ url, useToken = false, querykeys, query }) => {
  useWebSocket({ url, useToken, querykeys });
  const { data: ordersData } = useQuery(query());
  const { orders, total, totalToday } = ordersData;

  const doneOrders = useMemo(
    () => orders.filter((order) => order.status === orderStatusIds.DONE),
    [orders],
  );
  const pendingOrders = useMemo(
    () => orders.filter((order) => order.status === orderStatusIds.PENDING),
    [orders],
  );

  return { orders, total, totalToday, doneOrders, pendingOrders };
};
