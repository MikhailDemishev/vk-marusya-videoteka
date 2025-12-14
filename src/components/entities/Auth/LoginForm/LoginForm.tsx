import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AUTH_UI } from "../../../../features/auth/model/authConfig";
import { LoginValidateSchema, type ValidateLoginForm } from "../../../../api/auth/login/login.schemas";
import { useLogin } from "../../../../features/auth/hooks/useLogin";
import { FormField } from "../../../UI/FormField/FormField";
import { CustomInput } from "../../../UI/Input/Input";
import { Button } from "../../../UI/Button/Button";
import "./LoginForm.scss";


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
                loginMutation.mutate(values, {
                    onSuccess: () => {
                        reset();
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
