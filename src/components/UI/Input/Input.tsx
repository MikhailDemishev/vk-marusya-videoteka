import type { FC, HTMLAttributes } from "react";
import sprite from "/src/assets/images/sprite/sprite.svg";
import "./Input.scss";

export interface ICustomInput extends HTMLAttributes<HTMLInputElement> {
    type?: string;
    placeholder?: string;
    variant?: "search" | "auth";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    id?: string;
    name?: string;
    label?: string;
    iconId?: string;
    isError?: boolean;

}



export const CustomInput: FC<ICustomInput> = ({ type = 'text', variant = "auth", className = '', iconId, isError = false, ...inputProps }) => {
    const classes = `
        custom-input
        custom-input--${variant}
        ${isError ? "custom-input--error" : ""}
        ${className}
    `.trim();

    return (
        <div className={classes.trim()}>
            <svg className="custom-input__icon" aria-hidden="true">
                <use href={`${sprite}#${iconId}`} xlinkHref={`${sprite}#${iconId}`} />
            </svg>
            <input className="custom-input__field"
                {...inputProps}
                type={type} />
        </div>
    )
}
