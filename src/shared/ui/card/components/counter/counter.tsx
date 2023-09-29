import { Counter as CounterUI } from '#shared/ui/counter';
import { useCounter } from '../../hooks/use-counter';

export const Counter = () => {
  const { count } = useCounter();

  return count > 0 && <CounterUI count={count} />;
};
