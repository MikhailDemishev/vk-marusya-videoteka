import type { FC, ButtonHTMLAttributes } from "react";
import "./BurgerButton.scss";

type BurgerButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const BurgerButton: FC<BurgerButtonProps> = ({
    className = "",
    ...props
}) => {
    return (
        <button
            type="button"
            className={`${className} burger `}
            {...props}
        >
            <span className="burger__icon" />
        </button>
    );
};
