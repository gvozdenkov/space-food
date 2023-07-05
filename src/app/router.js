import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import { PATH } from '../utils/config';
import { RootLayout } from '../layouts/root-layout/root-layout';
import { queryClient } from '../services/api-setup';
import { RootErrorPage } from '../layouts/root-layout/root-error-page';
import { ingredientsLoader } from '../layouts/root-layout/ingredients-loader';
import { IngredientModal } from '../layouts/ingredient-modal';
import { makeOrderAction } from '../pages/home/home-action';
import { OnlyUnAuth } from '../features/auth';
import { Login } from '../pages/login';
import { loginAction } from '../pages/login/login-action';
import { store } from './store';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <RootLayout />,
    errorElement: <RootErrorPage />,
    loader: ingredientsLoader(queryClient),
    children: [
      {
        errorElement: <RootErrorPage />,
        children: [
          {
            path: PATH.HOME,
            element: <Home />,
            action: makeOrderAction(queryClient),
            children: [
              {
                path: `${PATH.INGREDIENTS}/:id`,
                element: <IngredientModal />,
              },
            ],
          },

          // {
          //   path: PATH.PROFILE,
          //   element: <OnlyAuth component={<ProfileLayout />} />,
          //   action: ProfileLayout.logout(store.dispatch),
          //   loader: userLoader(queryClient),
          //   children: [
          //     {
          //       errorElement: <ProfileLayoutErrorPage />,
          //       children: [
          //         {
          //           index: true,
          //           element: <Profile />,
          //           action: Profile.updateUser(store.dispatch),
          //         },
          //         {
          //           path: PATH.ORDERS,
          //           element: <Orders />,
          //         },
          //       ],
          //     },
          //   ],
          // },

          {
            path: PATH.LOGIN,
            element: <OnlyUnAuth component={<Login />} />,
            action: loginAction(store.dispatch),
          },
          // {
          //   path: PATH.REGISTER,
          //   element: <OnlyUnAuth component={<Register />} />,
          //   action: Register.register(store.dispatch),
          // },
          // {
          //   path: PATH.FORGOT_PASSWORD,
          //   element: <OnlyUnAuth component={<ForgotPassword />} />,
          //   action: ForgotPassword.forgot(),
          // },
          // {
          //   path: PATH.RESET_PASSWORD,
          //   element: <OnlyUnAuth component={<ResetPassword />} />,
          //   action: ResetPassword.reset(),
          //   loader: ResetPassword.resetState(),
          // },
          // {
          //   path: PATH.ORDER_FEED,
          //   element: <OrderFeed />,
          // },
        ],
      },
    ],
  },
]);
