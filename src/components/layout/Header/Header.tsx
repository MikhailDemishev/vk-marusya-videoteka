import { Button } from "../../UI/Button/Button"
import { Nav } from "../../UI/Nav/Nav";
import { CustomInput } from "../../UI/Input/Input";
import sprite from '/src/assets/images/sprite/sprite.svg';
import { useUserProfile } from "../../../features/auth/hooks/useProfile";
import { useAuthModalActions } from "../../../features/auth/hooks/useAuthModal";


import "./Header.scss";


export const Header = () => {
    const { data: user } = useUserProfile();
    const { handleOpenAuthModal, handleLogOut } = useAuthModalActions()
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <a className="header-logo__link" href="/" aria-label="Ссылка на главную страницу">
                            <svg className="header__logo-image" width="24" height="32" aria-hidden="true">
                                <use href={`${sprite}#marusya-symbol`} xlinkHref={`${sprite}#marusya-symbol`} />
                            </svg>
                            <svg className="header__logo-text" width="100" height="21" aria-hidden="true">
                                <use href={`${sprite}#marusya-text`} xlinkHref={`${sprite}#marusya-text`} />
                            </svg>
                        </a>
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
                    {!user && (
                        <Button
                            variant="menu"
                            onClick={handleOpenAuthModal}
                        >
                            Войти
                        </Button>
                    )}

                    {user && (
                        <Button
                            variant="menu"
                            onClick={handleLogOut}
                        >
                            Выйти
                        </Button>
                    )}


                </div>
            </div>

        </header >
    )
}
