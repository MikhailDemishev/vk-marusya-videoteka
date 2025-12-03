import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import "./MainLayout.scss";
import { Outlet } from "react-router-dom";



export const MainLayout = () => {
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
