import { Price as PriceBasic } from '../price';
import { useCardContext } from './hook/useCardContext';

export const Price = () => {
  const product = useCardContext();

  return <PriceBasic amount={product.price} />;
};
