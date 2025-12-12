import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom";
import "./MainLayout.scss";
import { useAppSelector } from "../../../app/hooks/reduxHooks";
import { selectColor } from "../../../features/theme/themeSwitcherslice";
import { useEffect } from "react";

export const MainLayout = () => {
    const themeColor = useAppSelector(selectColor)
    useEffect(() => {
        localStorage.setItem("themeColor", themeColor);
        document.documentElement.setAttribute("data-theme", themeColor);
    }, [themeColor]);
    return (
        <div className="layout">
            <Header></Header>
            <main >
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer></Footer>
        </div>
    )
}
