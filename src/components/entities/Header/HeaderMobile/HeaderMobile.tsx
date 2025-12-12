import { Link } from "react-router-dom"
import { AppLogo } from "../../../UI/AppLogo/AppLogo"
import { HeaderAuth } from "../HeaderAuth/HeaderAuth"
import { HeaderNav } from "../HeaderNav/HeaderNav"
import { HeaderSearch } from "../HeaderSearch/HeaderSearch"
import { useMobileHeaderMode } from "./useMobileHeaderMode"
import { Button } from "../../../UI/Button/Button"
import sprite from "/src/assets/images/sprite/sprite.svg"
import "./HeaderMobile.scss";

export const HeaderMobile = () => {
    const { mobileMode, openMenu, openSearch, resetToDefault } = useMobileHeaderMode()
    return (
        <div className={`header__mobile header__mobile--${mobileMode}`}>
            <div className="header__left">
                <Link className="header__link" to="/" preventScrollReset={true}>
                    <AppLogo className="header" />
                </Link>
            </div>
            <div className="header__right">
                <div className="header__menu">
                    <Button variant="menu"
                        className="header__btn header__btn--menu"
                        onClick={() => {
                            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                            mobileMode === "menu" ? resetToDefault() : openMenu();
                        }}>
                        <svg className="header__btn-icon" aria-hidden="true">
                            <use href={`${sprite}#mobile-nav`} xlinkHref={`${sprite}#mobile-nav`} />
                        </svg>
                    </Button>
                    <HeaderNav />
                </div>
                <Button variant="menu" className="header__btn header__btn--search" onClick={openSearch}>
                    <svg className="header__btn-icon" aria-hidden="true" >
                        <use href={`${sprite}#icon-search`} xlinkHref={`${sprite}#icon-search`} />
                    </svg>
                </Button>
                <HeaderSearch onResetHeader={resetToDefault} />
                <HeaderAuth />
            </div>
        </div>

    )
}
