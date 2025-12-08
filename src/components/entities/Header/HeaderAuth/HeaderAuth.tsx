
import { Link } from "react-router-dom";
import "./HeaderAuth.scss";
import { useAuthModalActions } from "../../../../features/auth/hooks/useAuthModal";
import { useUserProfile } from "../../../../features/auth/hooks/useProfile";
import { Button } from "../../../UI/Button/Button";


export const HeaderAuth = () => {
    const { data: profile } = useUserProfile();
    const { handleOpenAuthModal } = useAuthModalActions()

    return profile ? (
        <Link to="/profile" className="btn btn--menu btn--menu-active header__btn">
            {profile.name}
        </Link>
    ) : (
        <Button variant="menu" className="header__btn" onClick={handleOpenAuthModal}>
            Войти
        </Button>
    );
}
