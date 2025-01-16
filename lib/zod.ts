import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .trim(),

  email: z
    .string()
    .email({
      message: "Email must be valid.",
    })
    .trim(),

  password: z
    .string()
    .min(8, {
      message: "Password must be atleast 8 characters.",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    ),
});

export const signInSchema = z.object({
  email: z
    .string()
    .email({
      message: "Email must be valid.",
    })
    .trim(),

  password: z
    .string()
    .min(8, {
      message: "Password must be atleast 8 characters.",
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      }
    ),
});
