import type { FC } from "react";
import "./DropDownWindow.scss";

interface IDropdownWindow {
    isOpen: boolean;
    children: React.ReactNode;
    className: string;
}

export const DropDownWindow: FC<IDropdownWindow> = ({ isOpen, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className={`${className}__dropdown dropdown`}>
            {children}
        </div>
    );
};
