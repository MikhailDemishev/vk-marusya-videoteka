import { zodResolver } from "@hookform/resolvers/zod";
import { LoginValidateSchema, type ValidateLoginForm } from "../../../../api/auth/login/login.schemas";
import { Button } from "../../../../components/UI/Button/Button";
import { CustomInput } from "../../../../components/UI/Input/Input";
import { useLogin } from "../../hooks/useLogin";
import { AUTH_UI } from "../../model/authConfig";

import "./LoginForm.scss";
import { useForm } from "react-hook-form";
import { FormField } from "../../../../components/UI/FormField/FormField";


export const LoginForm = (

) => {
    const inputProps = AUTH_UI.login.inputFields;
    const loginMutation = useLogin();

    const resetErrorsOnChange = () => loginMutation.reset();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ValidateLoginForm>({
        resolver: zodResolver(LoginValidateSchema),
    })

    return (

        <form
            className="login-form"
            onSubmit={handleSubmit((values) => {
                //убрать
                console.log('Отправка формы логина:', values);
                loginMutation.mutate(values, {
                    onSuccess: () => {
                        reset();
                        //убрать
                        console.log("form cleared");
                    }
                });
            })}>

            {inputProps.map((inputEl, index) => (

                <FormField className="login-form__field"
                    key={index}
                    label={inputEl.name}
                    errorMessage={errors[inputEl.name]?.message}
                >
                    <CustomInput
                        placeholder={inputEl.placeholder}
                        id={inputEl.name}
                        iconId={inputEl.iconId}
                        type={inputEl.type}
                        isError={!!errors[inputEl.name]}
                        {...register(inputEl.name, { onChange: resetErrorsOnChange })}
                    />

                </FormField>
            ))}

            {loginMutation.isError && (
                <p className="login-form__error-text">Неверный логин или пароль</p>
            )}

            <Button type="submit" size="m" className="register-form__btn">Войти</Button>

        </form>

    )

}
