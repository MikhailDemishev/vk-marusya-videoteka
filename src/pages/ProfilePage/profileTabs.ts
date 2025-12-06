import type { ITab } from "../../components/UI/Tabs/Tabs";

export const profileTabs: ITab[] = [
    {
        tabId: "favorites",
        label: "Избранные фильмы",
        labelMobile: "Избранное",
        icon: "heart",
        iconWidth: "24",
        iconHeight: "24",
        TabClassName: "profile-tab",
    },
    {
        tabId: "profile",
        label: "Настройка аккаунта",
        labelMobile: "Профиль",
        icon: "icon-avatar",
        iconWidth: "16",
        iconHeight: "21",
        TabClassName: "profile-tab",
    }
];
