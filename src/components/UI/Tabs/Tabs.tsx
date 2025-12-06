import type { FC } from "react";
import "./Tabs.scss";
import sprite from "/src/assets/images/sprite/sprite.svg";
import { useIsAnyDevice } from "../../../app/hooks/useIsAnyDevice";

export interface ITab {
    tabId: string;
    label: string;
    labelMobile: string;
    icon: string;
    iconWidth?: string | number;
    iconHeight?: string | number;
    TabClassName: string;

}


export interface ITabProps {
    tabs: ITab[]
    activeTab: string;
    onChange: (tabId: string) => void
    TabsClassName: string
}



export const Tabs: FC<ITabProps> = ({
    tabs,
    activeTab,
    onChange,
    TabsClassName,
    ...props
}) => {
    const classes = `${TabsClassName}-tabs tabs `.trim();
    const isMobile = useIsAnyDevice(768)

    return (
        <div className={classes} {...props}>
            {tabs.map((tab) => (
                <button
                    key={tab.tabId}
                    className={
                        `tab ${tab.tabId === activeTab ? 'tab' + '--active' : ''}`
                    }
                    type="button"
                    onClick={() => onChange(tab.tabId)}                >
                    <span className="tab__icon-wrapper">
                        <svg className={`tab__icon tab__icon--${tab.icon}`} width={tab.iconWidth} height={tab.iconHeight} aria-hidden="true">
                            <use href={`${sprite}#${tab.icon}`} xlinkHref={`${sprite}#${tab.icon}`} />
                        </svg>
                    </span>
                    <span className="tab__label">{isMobile ? tab.labelMobile : tab.label}</span>
                </button>

            ))}

        </div>

    );
};
