import { useEffect } from "react";

import { setPortSize } from "./viewPortSizeSlice";
import { useAppDispatch } from "./reduxHooks";

type ScreenType = "desktop" | "tablet" | "mobile";

export function useViewportInit() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mobileMQ = window.matchMedia("(max-width: 767px)");
        const tabletMQ = window.matchMedia("(max-width: 1023px)");

        const getScreenType = (): ScreenType => {
            if (mobileMQ.matches) return "mobile";
            if (tabletMQ.matches) return "tablet";
            return "desktop";
        };

        const update = () => {
            dispatch(
                setPortSize({
                    screenType: getScreenType(),
                })
            );
        };


        // initial
        update();

        // listeners
        mobileMQ.addEventListener("change", update);
        tabletMQ.addEventListener("change", update);

        return () => {
            mobileMQ.removeEventListener("change", update);
            tabletMQ.removeEventListener("change", update);
        };
    }, [dispatch]);
}
