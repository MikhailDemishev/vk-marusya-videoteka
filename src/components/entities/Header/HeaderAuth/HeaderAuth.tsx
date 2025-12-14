
import { Link } from "react-router-dom";
import { useUserProfile } from "../../../../features/auth/hooks/useProfile";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";
import sprite from "/src/assets/images/sprite/sprite.svg";
import { Button } from "../../../UI/Button/Button";

export const HeaderAuth = () => {
    const { data: profile } = useUserProfile();
    const { handleLogin } = useAuthModal();
    const mobileProfileName = profile
        ? profile.name.slice(0, 1)
        : '';


    return profile ? (
        <Link to="/profile" className="btn btn--menu btn--menu-active header__btn header__btn--auth">
            <span className="btn__info btn__info--desktop">
                {profile.name}
            </span>
            <span className="btn__info btn__info--mobile">
                {mobileProfileName}
            </span>
        </Link>
    ) : (
        <>
            <Button variant="menu" className="header__btn header__btn--auth" onClick={handleLogin}>
                <span className="header__btn-content">
                    <svg className="header__btn-icon" aria-hidden="true">
                        <use href={`${sprite}#icon-avatar`} xlinkHref={`${sprite}#icon-avatar`} />
                    </svg>
                    <span className="header__btn-text">Войти</span>
                </span>
            </Button>

        </>
    );
}
