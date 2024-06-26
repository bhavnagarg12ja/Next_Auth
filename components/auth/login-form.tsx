'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { CardWrapper } from '@/components/auth/card-wrapper';

export const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?Register"
      backButtonhref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => {})}></form>
      </Form>
      <div className="flex font-semibold justify-center items-center text-xl text-gray-700">
        Sign in to get started
      </div>
    </CardWrapper>
  );
};
