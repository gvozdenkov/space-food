import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useWebSocket, WebSocketProps } from '#shared/api';
import { orderStatus } from '#shared/config';
import { FeedQuery } from '../types';

type Props = WebSocketProps & {
  query: () => {
    queryKey: string[];
    queryFn: () => Promise<FeedQuery>;
  };
};

export const useFeed = ({ url, useToken = false, querykeys, query }: Props) => {
  const { isLoading } = useWebSocket({ url, useToken, querykeys });

  const { data } = useQuery<FeedQuery, Error>(query());

  const { orders, total, totalToday } = data!;

  const doneOrders = useMemo(
    () => orders.filter((order) => order.status === orderStatus.DONE),
    [orders],
  );
  const pendingOrders = useMemo(
    () => orders.filter((order) => order.status === orderStatus.PENDING),
    [orders],
  );

  return { orders, total, totalToday, doneOrders, pendingOrders, isLoading };
};
