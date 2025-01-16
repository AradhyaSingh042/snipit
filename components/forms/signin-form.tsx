"use client";

import { useRouter } from "next/navigation";
import { signInSchema } from "@/lib/zod";
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

const SignInForm = () => {
  const router = useRouter();

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (values: z.infer<typeof signInSchema>) => {
    await authClient.signIn.email(values, {
      onRequest: () => {
        //show loading
      },
      onSuccess: () => {
        router.push("/dashboard");
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });
  };

  return (
    <Form {...signInForm}>
      <form
        onSubmit={signInForm.handleSubmit(handleSignIn)}
        className="w-full mt-4 flex flex-col space-y-5 px-5 md:px-0"
      >
        <FormField
          control={signInForm.control}
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
          control={signInForm.control}
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
          Continue
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
