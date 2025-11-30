import "./Socials.scss";
interface ISocial {
    href: string;
    icon: string;
    alt: string;
    width: number;
    height: number;
}

const socials: ISocial[] = [
    { href: "https://vk.com", icon: "/src/assets/images/sprite/sprite.svg#vk-logo", width: 19, height: 10, alt: "VK" },
    { href: "https://youtube.com", icon: "/src/assets/images/sprite/sprite.svg#youtube-logo", width: 16, height: 12, alt: "YouTube" },
    { href: "https://ok.ru", icon: "/src/assets/images/sprite/sprite.svg#ok-logo", width: 11, height: 18, alt: "OK" },
    { href: "https://t.me", icon: "/src/assets/images/sprite/sprite.svg#tg-logo", width: 17, height: 14, alt: "Telegram" },
];

export const Socials = () => {

    return (
        <div className="socials">
            {
                socials.map((s) => (
                    <a
                        key={s.alt}
                        className="socials__item"
                        href={s.href}
                        aria-label={s.alt}
                        target="_blank"
                    >
                        <svg className="socials__logo" width={s.width} height={s.height} aria-hidden="true">
                            <use href={s.icon}></use>
                        </svg>
                    </a>
                ))
            }
        </div>

    )
}
