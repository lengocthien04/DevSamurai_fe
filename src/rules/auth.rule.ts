import { z } from "zod";

const handleEmailz = () => {
  return z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address.");
};

const handlePasswordz = () => {
  return z
    .string()
    .min(1, "Password is required")
    .min(8, "Password does not meet requirements.")
    .regex(/\d/, "Password does not meet requirements.")
    .regex(/[a-z]/, "Password does not meet requirements.")
    .regex(/[A-Z]/, "Password does not meet requirements.");
};

export const registerSchema = z.object({
  email: handleEmailz(),
  password: handlePasswordz(),
  username: z.string().min(1, "Name is required"),
});
export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().nullable(),
  password: z.string().nullable(),
});
export type LoginSchema = z.infer<typeof loginSchema>;
