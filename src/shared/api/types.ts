export type OrderStatus = 'pending' | 'cancel' | 'done';

export type Credentials = {
  name: string;
  email: string;
  password: string;
  refreshToken: string;
  token: string;
};

export type User = {
  name: string;
  email: string;
};

export type Order = {
  ingredients: string[];
  name: string;
  owner: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type GetOrderRes = {
  success: boolean;
  orders: Order[];
};

export type FeedOrder = Omit<Order, '__v' | 'owner'> & { number: number };
