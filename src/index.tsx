import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { IntelApp } from './components/intelApp';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PATH } from './utils/config';
import { Root } from './routes/root';
import { loader as rootLoader } from './routes/main';
import { ErrorPage } from './pages/error-page';
import { Main } from './components/main';
import { ProfileLayout } from './pages/profile-layout';
import { Orders } from './pages/profile-layout/components/orders';
import { Profile } from './pages/profile-layout/components/profile';
import { Login } from './routes/login';
import { Register } from './pages/register';
import { ForgotPassword } from './pages/forgot-password';
import { ResetPassword } from './pages/reset-password';
import { action as loginAction } from './routes/login/login-action';
import { FormErrorElement } from './routes/form-error-element';

const ReactQueryDevtools = React.lazy(async () => {
  const devtools = await import('@tanstack/react-query-devtools/build/lib/index.prod.js');

  return {
    default: devtools.ReactQueryDevtools,
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Main />,
            loader: rootLoader(queryClient),
          },

          {
            path: PATH.PROFILE,
            element: <ProfileLayout />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                path: PATH.ORDERS,
                element: <Orders />,
              },
            ],
          },

          {
            path: PATH.REGISTER,
            element: <Register />,
          },
          {
            path: PATH.LOGIN,
            element: <Login />,
            errorElement: <Login outlet={<FormErrorElement />} />,
            action: loginAction(store.dispatch),
          },
          {
            path: PATH.FORGOT_PASSWORD,
            element: <ForgotPassword />,
          },
          {
            path: PATH.RESET_PASSWORD,
            element: <ResetPassword />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <IntelApp>
          <RouterProvider router={router} />
          <ReactQueryDevtools position='bottom-right' />
        </IntelApp>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
