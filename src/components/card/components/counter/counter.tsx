import { useCounter } from '#components/card/hooks/use-counter';
import { Counter as CounterUI } from '#components/counter';

export const Counter = () => {
  const { count } = useCounter();

  return count > 0 && <CounterUI count={count} />;
};
