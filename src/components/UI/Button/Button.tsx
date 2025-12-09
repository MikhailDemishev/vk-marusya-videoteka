import type { ButtonHTMLAttributes, FC, } from "react";
import sprite from "/src/assets/images/sprite/sprite.svg";
import "./Button.scss";


interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isDisabled?: boolean;
    type?: "submit" | "reset" | "button";
    variant?: "primary" | "secondary" | "menu" | "link" | "close";
    size?: "l" | "m" | "s";
}

export const Button: FC<IButtonProps> = ({
    className = "",
    type = "button",
    variant = "primary",
    size,
    children,
    disabled,
    ...props
}) => {
    const classes = [
        "btn",
        `btn--${variant}`,
        size && `btn--${size}`,
        disabled && "btn--disabled",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    const content =
        variant === "close" ? (
            <svg className="btn__icon" aria-hidden="true">
                <use href={`${sprite}#icon-close`} xlinkHref={`${sprite}#icon-close`} />
            </svg>
        ) : (
            children
        );

    return (
        <button
            type={type}
            disabled={disabled}
            className={classes.trim()}
            {...props}
        >
            {content}

        </button>
    );
};
