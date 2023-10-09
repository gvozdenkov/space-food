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
        path: ROUTE.PROFILE.ROOT,
        lazy: async () => ({
          Component: (await import('./layouts/profile-layout')).ProfileLayout,
          loader: (await import('../entities/session')).userLoader(queryClient),
        }),
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import('../pages/profile')).ProfilePage,
            }),
          },
          {
            path: ROUTE.PROFILE.ORDERS,
            lazy: async () => ({
              Component: (await import('../pages/profile-feed')).ProfileFeedPage,
              loader: (await import('../entities/feed')).profileFeedLoader(queryClient),
            }),
            // children: [
            //   {
            //     path: ':number',
            //     lazy: async () => ({
            //       Component: (await import('../routes/order-modal')).OrderModal,
            //       loader: (
            //         await import('../routes/order-modal/order-modal-loader')
            //       ).orderModalLoader(queryClient),
            //     }),
            //   },
            // ],
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
      {
        path: ROUTE.RESET_PASSWORD,
        lazy: async () => ({
          Component: (await import('../pages/reset-password')).ResetPasswordPage,
        }),
      },
      {
        path: ROUTE.FEED,
        lazy: async () => ({
          Component: (await import('../pages/feed')).FeedPage,
          loader: (await import('../entities/feed/')).feedLoader(queryClient),
        }),
        // children: [
        //   {
        //     path: ':number',
        //     lazy: async () => ({
        //       Component: (await import('../routes/order-modal')).OrderModal,
        //       loader: (await import('../routes/order-modal/order-modal-loader')).orderModalLoader(
        //         queryClient,
        //       ),
        //     }),
        //   },
        // ],
      },
    ],
  },
]);
