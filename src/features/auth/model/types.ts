import type { ValidateRegForm } from "../../../api/auth/register/register.schemas";
import type { ValidateLoginForm } from "../../../api/auth/login/login.schemas";
export type AuthType = "login" | "register" | "success";

export type AuthInputField<T extends string> = {
    name: T;
    placeholder: string;
    iconId?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type AuthConfig<T extends string> = {
    title: string;
    switchBtn: string;
    switchTo: AuthType;
    form?: React.ComponentType;
    inputFields: AuthInputField<T>[];
};
export type LoginKeys = keyof ValidateLoginForm;
export type RegisterKeys = keyof ValidateRegForm;
