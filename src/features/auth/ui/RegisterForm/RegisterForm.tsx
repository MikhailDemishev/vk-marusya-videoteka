import { CustomInput } from "../../../../components/UI/Input/Input";
import { Button } from "../../../../components/UI/Button/Button";
import { useForm } from "react-hook-form";
import { RegisterValidateSchema, type ValidateRegForm } from "../../../../api/auth/register/register.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "../../hooks/useRegister";
import { FormField } from "../../../../components/UI/FormField/FormField";
import { AUTH_UI } from "../../model/authConfig";

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
                    //убрать
                    console.log('Отправка формы:', values);
                    registerMutation.mutate(values, {
                        onSuccess: () => {
                            reset();
                            //убрать
                            console.log("form cleared");
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
