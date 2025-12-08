import type { FC, InputHTMLAttributes } from "react";
import sprite from "/src/assets/images/sprite/sprite.svg";


import "./Input.scss";

export interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {
    variant?: "search" | "auth";
    label?: string;
    iconId?: string;
    isError?: boolean;
    resetField?: boolean;
    onReset?: () => void;
}



export const CustomInput: FC<ICustomInput> = ({
    type = 'text',
    variant = "auth",
    className = '', iconId,
    isError = false,
    resetField = false,
    onReset,
    ...inputProps
}) => {
    const classes = [
        "custom-input",
        `custom-input--${variant}`,
        isError ? "custom-input--error" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div className={classes.trim()}>
            <svg className="custom-input__icon" aria-hidden="true">
                <use href={`${sprite}#${iconId}`} xlinkHref={`${sprite}#${iconId}`} />
            </svg>
            <input className="custom-input__field"
                {...inputProps}
                type={type} />
            {resetField && (
                <button className="custom-input__reset" onClick={onReset}>
                    <svg className="custom-input__icon custom-input__icon--reset" aria-hidden="true">
                        <use href={`${sprite}#icon-close`} xlinkHref={`${sprite}#icon-close`} />
                    </svg>
                </button>
            )}
        </div>
    )
}
