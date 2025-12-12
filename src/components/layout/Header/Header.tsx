import { Link } from "react-router-dom";
import { AppLogo } from "../../UI/AppLogo/AppLogo";
import { HeaderAuth } from "../../entities/Header/HeaderAuth/HeaderAuth";
import { HeaderNav } from "../../entities/Header/HeaderNav/HeaderNav";
import { HeaderSearch } from "../../entities/Header/HeaderSearch/HeaderSearch";
import { useViewportFlags } from "../../../app/hooks/useViewPortFlags";
import "./Header.scss";
import { HeaderMobile } from "../../entities/Header/HeaderMobile/HeaderMobile";


export const Header = () => {
    const { isMobile } = useViewportFlags();

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {!isMobile && (
                        <>
                            <div className="header__left">
                                <Link className="header__link" to="/" preventScrollReset={true}>
                                    <AppLogo className="header" />
                                </Link>
                            </div>
                            <div className="header__right">
                                <HeaderNav />
                                <HeaderSearch />
                                <HeaderAuth />
                            </div>
                        </>
                    )}
                    {isMobile && (<HeaderMobile />)}
                </div>
            </div>
        </header >
    )
}
