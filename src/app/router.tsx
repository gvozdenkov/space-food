import { createBrowserRouter } from 'react-router-dom';
import { GlobalError } from '#components/global-error';
import { ROUTES } from '#constants/routes';
import { RootLayout } from '#layout/root-layout';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    errorElement: <RootLayout outlet={<GlobalError />} />,
    children: [
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
