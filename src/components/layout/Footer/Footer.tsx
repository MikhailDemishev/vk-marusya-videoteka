import "./Footer.scss";
import { Socials } from "../../UI/Socials/Socials";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";




export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <ThemeSwitcher parentClassName="footer" />
                    <Socials />
                </div>
            </div>
        </footer>
    )
}
