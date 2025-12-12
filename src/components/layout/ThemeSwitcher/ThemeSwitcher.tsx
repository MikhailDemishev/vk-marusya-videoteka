
import { selectColor, setColor } from "../../../features/theme/themeSwitcherslice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/reduxHooks";
import sprite from '/src/assets/images/sprite/sprite.svg';
import type { FC } from "react";
import "./ThemeSwitcher.scss";

interface IThemeSwitcher {
    parentClassName?: string;
}


export const ThemeSwitcher: FC<IThemeSwitcher> = ({ parentClassName }) => {
    const dispatch = useAppDispatch();
    const currentColor = useAppSelector(selectColor);
    const handleChangeColor = () => { dispatch(setColor(currentColor === 'dark' ? 'light' : 'dark')) }


    return (
        <button onClick={handleChangeColor} className={parentClassName ? `${parentClassName}__theme-switcher theme-switcher` : "theme-switcher"}>
            <svg className="theme-switcher__logo" width="20" height="20" aria-hidden="true">
                {
                    currentColor == 'dark' ? (
                        <use href={`${sprite}#icon-sun`} xlinkHref={`${sprite}#icon-sun`} />
                    ) : (
                        <use href={`${sprite}#icon-moon`} xlinkHref={`${sprite}#icon-moon`} />
                    )
                }
            </svg>
        </button>

    )
}
