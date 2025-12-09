
import { Link } from "react-router-dom";
import { useUserProfile } from "../../../../features/auth/hooks/useProfile";
import { Button } from "../../../UI/Button/Button";
import { useAuthModal } from "../../../../features/auth/hooks/useAuthModal";



export const HeaderAuth = () => {
    const { data: profile } = useUserProfile();
    const { handleLogin } = useAuthModal();

    return profile ? (
        <Link to="/profile" className="btn btn--menu btn--menu-active header__btn">
            {profile.name}
        </Link>
    ) : (
        <Button variant="menu" className="header__btn" onClick={handleLogin}>
            Войти
        </Button>
    );
}
