import "./Footer.scss";
import { Socials } from "../../UI/Socials/Socials";


export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <Socials></Socials>
                </div>
            </div>
        </footer>
    )
}
