import { CardWrapper } from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?Register"
      backButtonhref="/auth/register"
      showSocial
    >
      <div className="flex font-semibold justify-center items-center text-xl text-gray-700">
        Sign in to get started
      </div>
    </CardWrapper>
  );
};
