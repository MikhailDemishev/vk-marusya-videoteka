import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string(),
    password: z.string(),
});

export type LoginType = z.infer<typeof LoginSchema>;

//validation Schema
export const LoginValidateSchema = z.object({
    email: z
        .string()
        .min(5, 'Email должен содержать минимум 5 символов')
        .email('Некорректный email'),
    password: z.string().min(8, 'Минимум 8 символов'),
});

export type ValidateLoginForm = z.infer<typeof LoginValidateSchema>;


export const LoginResponseSchema = z.object({
    result: z.boolean(),
});

export type LoginResponse = z.infer<typeof LoginResponseSchema>;
