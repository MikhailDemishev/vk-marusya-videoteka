import { Button } from "../../../../components/UI/Button/Button";
import { AUTH_UI } from "../../model/authConfig";
import "./AuthCard.scss";
import { selectAuthModalStatus, setAuthModalStatus } from "../../model/authModalStatusSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";



export const AuthForm = () => {
    const dispatch = useAppDispatch();
    const authType = useAppSelector(selectAuthModalStatus)
    console.log(authType);
    const handleAuthSwitch = () => dispatch(setAuthModalStatus(AUTH_UI[authType].switchTo))



    const Form = AUTH_UI[authType].form;

    return (
        <div className="auth-card">
            <p className="auth-card__title">{AUTH_UI[authType].title}</p>
            {authType === "success" && (
                <p className="auth-card__success-message">Используйте вашу электронную почту для входа</p>
            )}
            {Form && <Form />}
            <Button
                type="button"
                size="m"
                className="btn--invert auth-card__btn "
                onClick={handleAuthSwitch}
            >{AUTH_UI[authType].switchBtn}</Button>
        </div>
    )

}
