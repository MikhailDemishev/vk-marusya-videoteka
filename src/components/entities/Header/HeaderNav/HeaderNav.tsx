import { Nav } from "../../../UI/Nav/Nav"
import "./HeaderNav.scss";

export const HeaderNav = () => {
    return (
        <Nav
            items={[
                { label: "Главная", to: "/" },
                { label: "Жанры", to: "/genres" },
            ]}
            className="header__nav"
        ></Nav>
    )
}
