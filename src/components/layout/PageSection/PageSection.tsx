import type { FC, ReactNode } from "react";
import "./PageSection.scss";


interface IPageSectionProps {
    title: string;
    children: ReactNode;
    sectionName: string;
    headerSlot?: ReactNode;
}


export const SectionLayout: FC<IPageSectionProps> = ({ children, title, sectionName, headerSlot }) => {
    return (
        <section className={`page-section ${sectionName}-section`}>
            <h2 className={`${sectionName}-section__title`}>{title}</h2>
            {headerSlot && (
                <div className={`${sectionName}-section__header`}>{headerSlot}</div>
            )}
            <div className={`${sectionName}-section__content`}>{children}</div>
        </section>
    )
}
