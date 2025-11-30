import type { FC, HTMLAttributes } from "react";
import "./Button.scss";
import sprite from "/src/assets/images/sprite/sprite.svg";


interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    isDisabled?: boolean;
    type?: "submit" | "reset" | "button";
    variant?: "primary" | "secondary" | "menu" | "link" | "close";
    size?: "l" | "m" | "s";
}

export const Button: FC<IButtonProps> = ({
    isLoading,
    isDisabled = isLoading,
    className = "",
    type = "button",
    variant = "primary",
    size,
    children,
    ...props
}) => {
    const classes = [
        "btn",
        `btn--${variant}`,
        size && `btn--${size}`,
        className,
    ].filter(Boolean).join(" ");
    const content =
        variant === "close" ? (
            <svg className="close-btn__icon" width="19" height="19" aria-hidden="true">
                <use href={`${sprite}#icon-close`} xlinkHref={`${sprite}#icon-close`} />
            </svg>
        ) : isLoading ? (
            "Loading…"
        ) : (
            children
        );

    return (
        <button
            disabled={isDisabled}
            type={type}
            className={classes.trim()}
            {...props}
        >
            {content}

        </button>
    );
};
