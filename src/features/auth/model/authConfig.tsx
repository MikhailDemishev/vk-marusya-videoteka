
import type { AuthConfig, LoginKeys, RegisterKeys } from "./auth.types"
import { LoginForm } from "../ui/LoginForm/LoginForm"
import { RegisterForm } from "../ui/RegisterForm/RegisterForm"

export const AUTH_UI: {
    login: AuthConfig<LoginKeys>;
    register: AuthConfig<RegisterKeys>;
    success: AuthConfig<never>;
}
    = {
    login: {
        title: "",
        switchBtn: "Регистрация",
        switchTo: "register",
        form: LoginForm,
        inputFields: [
            {
                name: "email",
                placeholder: "Электронная почта",
                iconId: "icon-email",
                type: "text",
            },
            {
                name: "password",
                placeholder: "Пароль",
                iconId: "icon-key",
                type: "password",
            }
        ]


    },
    register: {
        title: "Регистрация",
        switchBtn: "У меня есть аккаунт",
        switchTo: "login",
        form: RegisterForm,
        inputFields: [
            {
                name: "email",
                placeholder: "Электронная почта",
                iconId: "icon-email",
            },
            {
                name: "name",
                placeholder: "Имя",
                iconId: "icon-avatar",
            },
            {
                name: "surname",
                placeholder: "Фамилия",
                iconId: "icon-avatar",
            },
            {
                name: "password",
                placeholder: "Пароль",
                iconId: "icon-key",
                type: "password",
            },
            {
                name: "repeatPassword",
                placeholder: "Подтвердите пароль",
                iconId: "icon-key",
                type: "password",
            }
        ]

    },
    success: {
        title: "Регистрация завершена!",
        switchBtn: "Войти",
        switchTo: "login",
        inputFields: []
    }
}
