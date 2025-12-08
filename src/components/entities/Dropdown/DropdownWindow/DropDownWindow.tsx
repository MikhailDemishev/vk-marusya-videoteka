import type { FC } from "react";
import "./DropDownWindow.scss";
import React from "react";

interface IDropdownWindow {
    isOpen: boolean;
    children: React.ReactNode;
    className: string;
}

const DropDownWindow: FC<IDropdownWindow> = ({ isOpen, children, className }) => {
    if (!isOpen) return null;

    return (
        <div className={`${className}__dropdown dropdown`}>
            {children}
        </div>
    );
};

export const MemoizedDropDownWindow = React.memo(DropDownWindow)
