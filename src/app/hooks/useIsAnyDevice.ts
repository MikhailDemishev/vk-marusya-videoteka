import { useState, useEffect } from "react";

export function useIsAnyDevice(breakpoint: number) {
    const [IsAnyDevice, setAnyDevice] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const handleResize = () => {
            const myDevice = window.innerWidth <= breakpoint;
            setAnyDevice(myDevice);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return IsAnyDevice;
}
