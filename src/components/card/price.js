import { Price as PriceBasic } from '../price';
import { useCardContext } from './hook/use-card-context';

export const Price = () => {
  const product = useCardContext();

  return <PriceBasic amount={product.price} />;
};
