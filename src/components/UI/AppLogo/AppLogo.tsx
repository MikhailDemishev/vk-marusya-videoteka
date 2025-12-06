import type { FC } from "react";
import "./AppLogo.scss";
import sprite from "/src/assets/images/sprite/sprite.svg";

interface AppLogoProps {
    className?: string;
}

export const AppLogo: FC<AppLogoProps> = ({
    className = "",
}) => {
    return (
        <span className={className ? `app-logo ${className}__app-logo` : "app-logo"}>

            <svg className="app-logo__icon app-logo__icon--img" aria-hidden="true">
                <use href={`${sprite}#marusya-symbol`} xlinkHref={`${sprite}#marusya-symbol`} />
            </svg>
            <svg className="app-logo__icon app-logo__icon--text" aria-hidden="true">
                <use href={`${sprite}#marusya-text`} xlinkHref={`${sprite}#marusya-text`} />
            </svg>
        </span>
    );
};
