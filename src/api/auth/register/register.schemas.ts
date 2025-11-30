import { z } from "zod";
import { LoginSchema } from "../login/login.schemas";


export const RegisterSchema = LoginSchema.extend({
    name: z.string(),
    surname: z.string(),
    repeatPassword: z.string().min(8),
});

export type RegisterType = z.infer<typeof RegisterSchema>;

//validation Schema
export const RegisterValidateSchema = z.object({
    email: z
        .string()
        .min(5, 'Email должен содержать минимум 5 символов')
        .email('Некорректный email'),

    password: z.string().min(8, 'Минимум 8 символов'),

    repeatPassword: z.string().min(8, 'Минимум 8 символов'),

    name: z.string().regex(/^[\p{L}\p{M}\s'-]+$/u, "Имя содержит недопустимые символы"),

    surname: z.string().regex(/^[\p{L}\p{M}\s'-]+$/u, "Фамилия содержит недопустимые символы"),
})
    .refine((data) => data.password === data.repeatPassword, {
        message: "Пароли должны совпадать",
        path: ["repeatPassword"],
    });


export type ValidateRegForm = z.infer<typeof RegisterValidateSchema>;


export const RegisterResponseSchema = z.object({
    success: z.boolean(),
});

export type RegisterResponse = z.infer<typeof RegisterResponseSchema>;
