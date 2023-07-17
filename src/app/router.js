import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../routes/home';
import { PATH } from '../utils/config';
import { queryClient } from './api-setup';
import { makeOrderAction } from '../routes/home/home-action';
import { OnlyAuth, OnlyUnAuth } from '../features/auth';
import { Login } from '../routes/login';
import { loginAction } from '../routes/login/login-action';
import { store } from './store';
import { Register } from '../routes/register';
import { registerAction } from '../routes/register/register-action';
import { ForgotPassword } from '../routes/forgot-password';
import { forgotPasswordAction } from '../routes/forgot-password/forgot-password-action';
import { ResetPassword } from '../routes/reset-password';
import { resetPasswordAction } from '../routes/reset-password/reset-password-action';
import { resetPasswordLoader } from '../routes/reset-password/reset-password-loader';
import { FormErrorElement } from '../routes/form-error-element';
import { Profile } from '../routes/profile';
import { Orders } from '../routes/orders';
import { updateUserAction } from '../routes/profile/update-user-action';
import { GlobalError } from '../components/global-error';
import { OrderFeed } from '../routes/order-feed/order-feed';
import { RootLayout } from '../routes/root-layout/root-layout';
import { ingredientsLoader } from '../routes/root-layout/ingredients-loader';
import { ProfileLayout } from '../routes/profile-layout';
import { logoutAction } from '../routes/profile-layout/logout-action';
import { userLoader } from '../routes/profile-layout/user-loader';
import { IngredientModal } from '../routes/ingredient-modal';
import { CreateOrderModal } from '../routes/create-order-modal';
import { OrderModal } from '../routes/order-modal';
import { ordersLoader } from '../routes/orders/orders';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <RootLayout />,
    errorElement: <RootLayout outlet={<GlobalError />} />,
    loader: ingredientsLoader(queryClient),
    children: [
      {
        errorElement: <GlobalError />,
        children: [
          {
            path: PATH.HOME,
            element: <Home />,
            errorElement: <Home outlet={<FormErrorElement />} />,
            action: makeOrderAction(store.dispatch),
            children: [
              {
                path: `${PATH.INGREDIENTS}/:id`,
                element: <IngredientModal />,
              },
              {
                path: `${PATH.ORDER}/:id`,
                element: <CreateOrderModal />,
              },
            ],
          },

          {
            path: PATH.PROFILE.ROOT,
            element: <OnlyAuth component={<ProfileLayout />} />,
            errorElement: <GlobalError />,
            action: logoutAction(store.dispatch),
            loader: userLoader(queryClient),
            children: [
              {
                errorElement: <GlobalError />,
                children: [
                  {
                    index: true,
                    element: <Profile />,
                    errorElement: <Profile outlet={<FormErrorElement />} />,
                    action: updateUserAction(store.dispatch),
                  },
                  {
                    path: PATH.PROFILE.ORDERS,
                    element: <Orders />,
                    loader: ordersLoader(queryClient),
                    children: [
                      {
                        path: ':id',
                        element: <OrderModal />,
                      },
                    ],
                  },
                ],
              },
            ],
          },

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
          {
            path: PATH.ORDER_FEED,
            element: <OrderFeed />,
          },
        ],
      },
    ],
  },
]);
