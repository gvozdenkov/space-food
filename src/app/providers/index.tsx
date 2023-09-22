import { RouterProvider } from 'react-router-dom';
import { ReduxProvider } from './redux-provider';
import { QueryClientProvider } from './query-client-provider';
import { Router } from './router-provider';

export const Providers = () => {
  return (
    <QueryClientProvider>
      <ReduxProvider>
        <RouterProvider router={Router()} />
      </ReduxProvider>
    </QueryClientProvider>
  );
};
