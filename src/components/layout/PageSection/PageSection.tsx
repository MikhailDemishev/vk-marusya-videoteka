import type { FC, ReactNode } from "react";
import "./PageSection.scss";


interface IPageSectionProps {
    title: string;
    children: ReactNode;
    className?: string;
}


export const SectionLayout: FC<IPageSectionProps> = ({ children, title, className }) => {
    return (
        <section className={`page-section ${className ?? ""}`}>
            <h2 className="page-section__title">{title}</h2>
            <div className="page-section__content">{children}</div>
        </section>
    )
}
