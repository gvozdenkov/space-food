import { createBrowserRouter } from 'react-router-dom';
import { ingredientsLoader } from '#feature/burger-ingredients';
import { RootLayout } from '#pages';
import { queryClient } from '#shared/lib/react-query';
import { ROUTE } from '#shared/lib/react-router';

export const Router = () => {
  return createBrowserRouter([
    {
      path: ROUTE.HOME,
      element: <RootLayout />,
      errorElement: <RootLayout withError />,
      loader: ingredientsLoader(queryClient),
      children: [
        {
          path: ROUTE.HOME,
          lazy: async () => ({
            Component: (await import('../../pages/home')).Home,
          }),
          // children: [
          //   {
          //     path: `${ROUTE.INGREDIENTS}/:id`,
          //     lazy: async () => ({
          //       Component: (await import('../pages/ingredient-modal')).IngredientModal,
          //     }),
          //   },
          // ],
        },
        // {
        //   path: ROUTE.PROFILE,
        //   lazy: async () => ({
        //     Component: (await import('../layout/profile-layout')).ProfileLayout,
        //   }),
        //   children: [
        //     {
        //       index: true,
        //       lazy: async () => ({
        //         Component: (await import('../pages/profile.page')).Profile,
        //       }),
        //     },
        //   ],
        // },
      ],
    },
  ]);
};
