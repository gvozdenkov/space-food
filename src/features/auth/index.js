import { ForgotPasswordForm } from './components/fogot-password-form';
import { LoginForm } from './components/login-form';
import { OnlyAuth, OnlyUnAuth } from './components/protected-route/protected-route';
import { RegisterForm } from './components/register-form';
import { ResetPasswordForm } from './components/reset-password-form';
import { AuthService } from './services/auth-service';

export {
  LoginForm,
  RegisterForm,
  AuthService,
  ForgotPasswordForm,
  ResetPasswordForm,
  OnlyAuth,
  OnlyUnAuth,
};
