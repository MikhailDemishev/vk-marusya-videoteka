import { useState } from "react";

export const useActiveProfileTab = () => {
    const [activeTab, setActiveTab] = useState('favorites');

    const handleActiveTab = (id: string): void => {
        setActiveTab(id)
        console.log(activeTab);
    }

    return { handleActiveTab, activeTab }

}
