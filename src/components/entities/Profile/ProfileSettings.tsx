import type { FC } from "react";
import type { ProfileResponse } from "../../../api/auth/profile/profile.schemas";
import { shortNameSurname } from "../../../utils/shortNameSurname";
import sprite from '/src/assets/images/sprite/sprite.svg';
import "./ProfileSettings.scss";
import { Button } from "../../UI/Button/Button";
import { useAuthModal } from "../../../features/auth/hooks/useAuthModal";


interface IProfileSettings {
    profile: ProfileResponse | null
}

interface ProfileInfoItem {
    labelName: string;
    value: string;
    addParameter: string;
    hasIcon: boolean;
}

export const ProfileSettings: FC<IProfileSettings> = ({
    profile,
}) => {
    const { handleLogOut } = useAuthModal()
    const profileSettingConfig: ProfileInfoItem[] = [
        { labelName: "Имя Фамилия ", value: profile!.name + ' ' + profile!.surname, addParameter: shortNameSurname(profile!.name, profile!.surname), hasIcon: false },
        { labelName: "Электронная почта ", value: profile!.email, addParameter: 'icon-email', hasIcon: true },
    ];

    return (
        <div className="profile-settings">
            <div className="profile-settings__fields">
                {profileSettingConfig.map(item => (
                    <div key={item.value} className="profile-settings__field">
                        <div className="profile-settings__field-logo">
                            {item.hasIcon ? (
                                <svg className="profile-settings__field-icon" aria-hidden="true">
                                    <use href={`${sprite}#${item.addParameter}`} xlinkHref={`${sprite}#${item.addParameter}`} />
                                </svg>
                            ) : (
                                <span className="profile-settings__field-initials">{item.addParameter}</span>
                            )}
                        </div>
                        <div className="profile-settings__field-info">
                            <span className="profile-settings__field-label">{item.labelName}</span>
                            <span className="profile-settings__field-label profile-settings__field-label--name">{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Button
                onClick={handleLogOut}
                className="profile-settings__btn"
                size={'m'}
            >
                Выйти из аккаунта
            </Button>
        </div>
    )
}
