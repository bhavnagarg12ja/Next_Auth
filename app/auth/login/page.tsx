import LoginForm from '@/components/auth/login-form';
import { CardWrapper } from '@/components/auth/card-wrapper';

const LoginPage = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account"
      backButtonhref="/auth/regiter"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
};

export default LoginPage;
