import { NavLink } from "react-router-dom";
import type { FC, HTMLAttributes } from "react";
import "./Nav.scss";

export interface INavItem {
    label: string;
    to: string;
}

interface INavProps extends HTMLAttributes<HTMLElement> {
    items: INavItem[];
}

export const Nav: FC<INavProps> = ({
    items,
    className = "",
    ...props
}) => {

    const classes = `nav ${className}`.trim();

    return (
        <nav className={classes} {...props}>
            {items.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => isActive ? "nav__link nav__link--active" : "nav__link"}
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};
