import { useState } from "react";

type MobileHeaderMode = "default" | "search" | "menu" | "burger";

export function useMobileHeaderMode() {
    const [mobileMode, setMobileMode] = useState<MobileHeaderMode>("default");
    const toggleBurger = () => {
        setMobileMode(mobileMode === "burger" ? "menu" : "burger");
    };

    console.log(mobileMode);

    return {
        mobileMode,
        toggleBurger,
        openSearch: () => setMobileMode("search"),
        openMenu: () => setMobileMode("menu"),
        resetToDefault: () => setMobileMode("default"),
    };
}
