import { z } from "zod";

const handleEmailz = () => {
  return z
    .string()
    .min(1, "Email is required") // Changed from .required() to .min(1)
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
export type RegisterSchema = z.infer<typeof registerSchema>; // Changed from z.InferType

export const loginSchema = z.object({
  // Changed to match error message - assuming this should be company code as a number
  email: z.string().min(1, "Company Code is required"), // Changed from .required()
  password: handlePasswordz(), // Changed from .required()
});
export type LoginSchema = z.infer<typeof loginSchema>; // Changed from z.InferType
