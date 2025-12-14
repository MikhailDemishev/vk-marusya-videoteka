import type { FC } from "react";
import { Nav } from "../../../UI/Nav/Nav"
import "./HeaderNav.scss";
interface IHeaderNav {
    onResetBurger?: () => (void);
}

export const HeaderNav: FC<IHeaderNav> = () => {
    return (
        <Nav
            items={[
                { label: "Главная", to: "/" },
                { label: "Жанры", to: "/genres" },
            ]}
            className="header__nav"
        >
        </Nav>
    )
}
