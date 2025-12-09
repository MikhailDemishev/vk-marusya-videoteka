import type { FC, ReactNode } from "react";
import "./PageLayout.scss";


interface IPageProps {
    children: ReactNode;
    pageName: string;
    title?: string;
}


export const PageLayout: FC<IPageProps> = ({ children, pageName, title }) => {
    const titleClass = `${pageName}-page__title` + (title ? "" : " visually-hidden");

    return (
        <div className={`${pageName}-page`}>
            <h1 className={titleClass}>
                {title ?? ""}
            </h1>

            {children}
        </div>
    );
};
