import { Button } from "../../UI/Button/Button";
import { Nav } from "../../UI/Nav/Nav";
import { CustomInput } from "../../UI/Input/Input";
import { useUserProfile } from "../../../features/auth/hooks/useProfile";
import { useAuthModalActions } from "../../../features/auth/hooks/useAuthModal";
import { Link } from "react-router-dom";
import { AppLogo } from "../../UI/AppLogo/AppLogo";
import "./Header.scss";


export const Header = () => {
    const { data: profile } = useUserProfile();
    const { handleOpenAuthModal } = useAuthModalActions()
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <Link className="header__link" to="/" preventScrollReset={true}>
                            <AppLogo className="header"></AppLogo>

                        </Link>
                    </div>
                    <div className="header__center">
                        <Nav
                            items={[
                                { label: "Главная", to: "/" },
                                { label: "Жанры", to: "/genres" },
                            ]}
                            className="header__nav"
                        ></Nav>
                        <CustomInput
                            placeholder="Поиск"
                            name="search"
                            variant="search"
                            onChange={(e) => console.log(e.target.value)}
                            className="header__custom-input"
                            id="icon-search"
                            iconId="icon-search"

                        />
                    </div>
                    {!profile && (
                        <Button
                            variant="menu"
                            onClick={handleOpenAuthModal}
                        >
                            Войти
                        </Button>
                    )}
                    {profile && (
                        <Link to="/profile" className="btn btn--menu btn--menu-active">{profile.name}</Link>

                    )}
                </div>
            </div>
        </header >
    )
}
