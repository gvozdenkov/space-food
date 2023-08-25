import { createBrowserRouter } from 'react-router-dom';
import { GlobalError } from '#components/global-error';
import { ROUTES } from '#constants/routes';
import { RootLayout } from '#layout/root-layout';
import { ingredientsLoader } from '#feature/burger-ingredients';
import { queryClient } from '#api';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    errorElement: <RootLayout outlet={<GlobalError />} />,
    loader: ingredientsLoader(queryClient),
    children: [
      {
        path: ROUTES.HOME,
        lazy: async () => ({
          Component: (await import('../pages/home')).Home,
        }),
      },
      {
        path: ROUTES.PROFILE,
        lazy: async () => ({
          Component: (await import('../layout/profile-layout')).ProfileLayout,
        }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('../pages/profile.page')).Profile,
            }),
          },
        ],
      },
    ],
  },
]);
