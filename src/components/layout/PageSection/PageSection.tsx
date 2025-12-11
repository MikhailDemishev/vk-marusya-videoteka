import type { FC, ReactNode } from "react";
import sprite from '/src/assets/images/sprite/sprite.svg';
import "./PageSection.scss";
import { Link } from "react-router-dom";


interface IPageSectionProps {
    title: string;
    children: ReactNode;
    sectionName: string;
    headerSlot?: ReactNode;
}


export const SectionLayout: FC<IPageSectionProps> = ({ children, title, sectionName, headerSlot }) => {
    return (
        <section className={`page-section ${sectionName}-section`}>
            {
                sectionName === 'genre' ? (
                    <>
                        <span className={`${sectionName}-section__header`}>
                            <Link className={`${sectionName}-section__backlink`} to='/genres' preventScrollReset={true}>
                                <svg className={`${sectionName}-section__backlink-logo`} aria-hidden="true">
                                    <use href={`${sprite}#icon-arrow`} xlinkHref={`${sprite}#icon-arrow`} />
                                </svg>
                            </Link>

                            <h2 className={`${sectionName}-section__title`}>{title}</h2>
                        </span>
                    </>
                ) : (
                    <h2 className={`${sectionName}-section__title`}>{title}</h2>
                )
            }
            {headerSlot && (
                <div className={`${sectionName}-section__header`}>{headerSlot}</div>
            )}
            <div className={`${sectionName}-section__content`}>{children}</div>
        </section>
    )
}
