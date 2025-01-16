"use client";

import { useRouter } from "next/navigation";
import { signUpSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth-client";

const SignUpForm = () => {
  const router = useRouter();

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = async (values: z.infer<typeof signUpSchema>) => {
    const { data, error } = await authClient.signUp.email(values, {
      onRequest: (ctx) => {
        //show loading
      },
      onSuccess: (ctx) => {
        router.push("/dashboard");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });
  };

  return (
    <Form {...signUpForm}>
      <form
        onSubmit={signUpForm.handleSubmit(handleSignUp)}
        className="w-full mt-4 flex flex-col space-y-5 px-5 md:px-0"
      >
        <FormField
          control={signUpForm.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel htmlFor="name" className="tracking-wide">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={signUpForm.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel htmlFor="email" className="tracking-wide">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  id="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={signUpForm.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-2">
              <FormLabel htmlFor="password" className="tracking-wide">
                Password
              </FormLabel>
              <FormControl>
                <Input id="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="py-5">
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
