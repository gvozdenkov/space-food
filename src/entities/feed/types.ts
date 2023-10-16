import { FeedOrder, Order as OrderBase } from '#shared/api/types';

export type Order = {
  order: OrderBase;
  extraClass?: string;
};

export type FeedQuery = {
  success: boolean;
  orders: FeedOrder[];
  total: number;
  totalToday: number;
};
