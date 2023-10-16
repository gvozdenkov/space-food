import { RouterProvider } from './router-provider';
import { ReduxProvider } from './redux-provider';
import { QueryClientProvider } from './query-client-provider';

export const Providers = () => {
  return (
    <QueryClientProvider>
      <ReduxProvider>
        <RouterProvider />
      </ReduxProvider>
    </QueryClientProvider>
  );
};
