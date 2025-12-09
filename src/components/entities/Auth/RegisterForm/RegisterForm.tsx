
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../../../../features/auth/hooks/useRegister";
import { AUTH_UI } from "../../../../features/auth/model/authConfig";
import { RegisterValidateSchema, type ValidateRegForm } from "../../../../api/auth/register/register.schemas";
import { FormField } from "../../../UI/FormField/FormField";
import { CustomInput } from "../../../UI/Input/Input";
import { Button } from "../../../UI/Button/Button";
import "./RegisterForm.scss";

export const RegisterForm = (

) => {
    const inputProps = AUTH_UI.register.inputFields

    const registerMutation = useRegister();

    const resetErrorsOnChange = () => registerMutation.reset();


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ValidateRegForm>({
        resolver: zodResolver(RegisterValidateSchema),
    })

    return (
        <>
            <form
                className="register-form"
                onSubmit={handleSubmit((values) => {
                    registerMutation.mutate(values, {
                        onSuccess: () => {
                            reset();
                        }
                    });
                })}>

                {inputProps.map((inputEl, index) => (

                    <FormField className="register-form__field"
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

                {registerMutation.isError && (
                    <p className="register-form__error-text">Пользователь с таким email уже существует</p>
                )}
                <Button type="submit" size="m" className="register-form__btn">Создать аккаунт</Button>
            </form>
        </>
    )

}
