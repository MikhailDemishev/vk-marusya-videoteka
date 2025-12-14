import { HeaderContent } from "../../entities/Header/HeaderContent/HeaderContent";
import "./Header.scss";




export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <HeaderContent />
            </div>
        </header>
    )
}
