import { useState } from "react";

export const useActiveProfileTab = () => {
    const [activeTab, setActiveTab] = useState('favorites');

    const handleActiveTab = (id: string): void => {
        setActiveTab(id)
    }

    return { handleActiveTab, activeTab }
}
