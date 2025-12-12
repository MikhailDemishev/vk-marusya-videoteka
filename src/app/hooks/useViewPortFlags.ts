import { useAppSelector } from "./reduxHooks";
import { selectScreenType } from "./viewPortSizeSlice";

export function useViewportFlags() {
    const screenType = useAppSelector(selectScreenType);

    return {
        isMobile: screenType === "mobile",
        isTablet: screenType === "tablet",
        isDesktop: screenType === "desktop",
    };
}
