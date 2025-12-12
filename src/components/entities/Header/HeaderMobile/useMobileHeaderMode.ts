import { useState } from "react";

type MobileHeaderMode = "default" | "search" | "menu";

export function useMobileHeaderMode() {
    const [mobileMode, setMobileMode] = useState<MobileHeaderMode>("default");
    console.log(mobileMode);

    return {
        mobileMode,
        openSearch: () => setMobileMode("search"),
        openMenu: () => setMobileMode("menu"),
        resetToDefault: () => setMobileMode("default"),
    };
}
