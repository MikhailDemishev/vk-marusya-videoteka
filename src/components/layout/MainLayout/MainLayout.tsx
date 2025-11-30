import type { ReactNode } from "react";
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import "./MainLayout.scss";


interface IMainLayoutProps {
    children: ReactNode;
}


export const MainLayout = ({ children }: IMainLayoutProps) => {
    return (
        <div className="layout">
            <Header></Header>
            <main >
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer></Footer>

        </div>
    )
}
