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
import { Register } from '../pages/register';
import { registerAction } from '../pages/register/register-action';
import { ForgotPassword } from '../pages/forgot-password';
import { forgotPasswordAction } from '../pages/forgot-password/forgot-password-action';
import { ResetPassword } from '../pages/reset-password';
import { resetPasswordAction } from '../pages/reset-password/reset-password-action';
import { resetPasswordLoader } from '../pages/reset-password/reset-password-loader';
import { FormErrorElement } from '../pages/form-error-element';

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
            errorElement: <Login outlet={<FormErrorElement />} />,
            action: loginAction(store.dispatch),
          },
          {
            path: PATH.REGISTER,
            element: <OnlyUnAuth component={<Register />} />,
            errorElement: <Register outlet={<FormErrorElement />} />,
            action: registerAction(store.dispatch),
          },
          {
            path: PATH.FORGOT_PASSWORD,
            element: <OnlyUnAuth component={<ForgotPassword />} />,
            errorElement: <ForgotPassword outlet={<FormErrorElement />} />,
            action: forgotPasswordAction(),
          },
          {
            path: PATH.RESET_PASSWORD,
            element: <OnlyUnAuth component={<ResetPassword />} />,
            errorElement: <ResetPassword outlet={<FormErrorElement />} />,
            action: resetPasswordAction(),
            loader: resetPasswordLoader(),
          },
          // {
          //   path: PATH.ORDER_FEED,
          //   element: <OrderFeed />,
          // },
        ],
      },
    ],
  },
]);
