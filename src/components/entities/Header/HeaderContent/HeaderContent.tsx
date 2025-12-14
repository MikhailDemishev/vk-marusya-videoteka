import { Link } from "react-router-dom"
import { AppLogo } from "../../../UI/AppLogo/AppLogo"
import { HeaderAuth } from "../HeaderAuth/HeaderAuth"
import { HeaderNav } from "../HeaderNav/HeaderNav"
import { HeaderSearch } from "../HeaderSearch/HeaderSearch"
import { useMobileHeaderMode } from "./useMobileHeaderMode"
import { Button } from "../../../UI/Button/Button"
import sprite from "/src/assets/images/sprite/sprite.svg"
import "./HeaderContent.scss";
import { BurgerButton } from "../../../UI/BurgerBtn/BurgerButton"

export const HeaderContent = () => {
    const { mobileMode, openMenu, openSearch, resetToDefault, toggleBurger } = useMobileHeaderMode()
    return (
        <div className={`header__inner header__inner--${mobileMode}`}>
            <div className="header__left">
                <BurgerButton className="header__btn header__btn--burger" onClick={toggleBurger} />
                <Link className="header__link" to="/" onClick={resetToDefault} preventScrollReset={true}>
                    <AppLogo className="header" />
                </Link>
            </div>
            <div className="header__right">
                <div className="header__menu">
                    <Button variant="menu"
                        className="header__btn header__btn--menu"
                        onClick={() => {
                            openMenu();
                        }}>
                        <svg className="header__btn-icon" aria-hidden="true">
                            <use href={`${sprite}#mobile-nav`} xlinkHref={`${sprite}#mobile-nav`} />
                        </svg>
                    </Button>
                    <HeaderNav onResetBurger={resetToDefault} />
                </div>
                <div className="header__panel">
                    <Button variant="menu" className="header__btn header__btn--search" onClick={openSearch}>
                        <svg className="header__btn-icon" aria-hidden="true" >
                            <use href={`${sprite}#icon-search`} xlinkHref={`${sprite}#icon-search`} />
                        </svg>
                    </Button>
                    <HeaderSearch onResetHeader={resetToDefault} />
                </div>
                <HeaderAuth />
            </div>
        </div>

    )
}
