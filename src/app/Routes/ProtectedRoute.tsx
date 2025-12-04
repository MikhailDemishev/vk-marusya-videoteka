import { type FC } from "react";
import { useUserProfile } from "../../features/auth/hooks/useProfile";
import { useAuthModalActions } from "../../features/auth/hooks/useAuthModal";
import { useEffect } from "react";



export interface IIprotectedRoute {
    children: React.ReactNode;
}

export const ProtectedRoute: FC<IIprotectedRoute> = ({ children }) => {
    const { handleOpenAuthModal } = useAuthModalActions()
    const { data: user } = useUserProfile();

    useEffect(() => {
        if (!user) {
            handleOpenAuthModal();
        }
    }, [user, handleOpenAuthModal]);

    return user ? children : null
}
