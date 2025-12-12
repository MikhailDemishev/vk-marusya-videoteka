
import { Link } from "react-router-dom";
import { useUserProfile } from "../../../../features/auth/hooks/useProfile";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";
import { useViewportFlags } from "../../../../app/hooks/useViewPortFlags";
import sprite from "/src/assets/images/sprite/sprite.svg";
import { Button } from "../../../UI/Button/Button";

export const HeaderAuth = () => {
    const { data: profile } = useUserProfile();
    const { handleLogin } = useAuthModal();
    const { isMobile } = useViewportFlags();


    return profile ? (
        <Link to="/profile" className="btn btn--menu btn--menu-active header__btn header__btn--auth">
            {profile.name}
        </Link>
    ) : (
        <>
            <Button variant="menu" className="header__btn header__btn--auth" onClick={handleLogin}>
                {isMobile
                    ? (<svg className="header__btn-icon" aria-hidden="true">
                        <use href={`${sprite}#icon-avatar`} xlinkHref={`${sprite}#icon-avatar`} />
                    </svg>) : "Войти"}
            </Button>

        </>
    );
}
