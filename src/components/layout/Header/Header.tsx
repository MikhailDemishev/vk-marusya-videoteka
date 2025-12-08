import { Link } from "react-router-dom";
import { AppLogo } from "../../UI/AppLogo/AppLogo";
import { HeaderAuth } from "../../entities/Header/HeaderAuth/HeaderAuth";
import { HeaderNav } from "../../entities/Header/HeaderNav/HeaderNav";
import "./Header.scss";
import { HeaderSearch } from "../../entities/Header/HeaderSearch/HeaderSearch";


export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link className="header__link" to="/" preventScrollReset={true}>
                        <AppLogo className="header"></AppLogo>
                    </Link>
                    <div className="header__controls">
                        <div className="header__primary">
                            <HeaderNav />
                            <HeaderSearch />
                        </div>
                        <HeaderAuth />
                    </div>
                </div>
            </div>
        </header >
    )
}
