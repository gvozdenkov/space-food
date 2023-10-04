import { createBrowserRouter } from 'react-router-dom';
import { ROUTE, queryClient } from '#shared/config';
import { BaseLayout } from './layouts/base-layout';
import { BaseLayoutWithError } from './layouts/base-layout-with-error';
import { ingredientsLoader } from '#widgets/burger-ingredients';

export const router = createBrowserRouter([
  {
    path: ROUTE.HOME,
    element: BaseLayout,
    errorElement: BaseLayoutWithError,
    loader: ingredientsLoader(queryClient),
    children: [
      {
        path: ROUTE.HOME,
        lazy: async () => ({
          Component: (await import('../pages/home')).Home,
        }),
        children: [
          {
            path: `${ROUTE.INGREDIENTS}/:id`,
            lazy: async () => ({
              Component: (await import('../pages/ingredient-modal')).IngredientModal,
            }),
          },
        ],
      },
      {
        path: ROUTE.PROFILE.root,
        lazy: async () => ({
          Component: (await import('./layouts/profile-layout')).ProfileLayout,
        }),
        action: (await import('../feature/logout')).logoutAction(),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('../pages/profile')).Profile,
            }),
          },
        ],
      },

      {
        path: ROUTE.LOGIN,
        lazy: async () => ({
          Component: (await import('../pages/login')).LoginPage,
        }),
      },
      {
        path: ROUTE.REGISTER,
        lazy: async () => ({
          Component: (await import('../pages/register')).RegisterPage,
        }),
      },
      {
        path: ROUTE.FORGOT_PASSWORD,
        lazy: async () => ({
          Component: (await import('../pages/forgot-password')).ForgotPasswordPage,
        }),
      },
    ],
  },
]);
