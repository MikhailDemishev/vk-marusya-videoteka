import { type FC } from "react";
import { useUserProfile } from "../../features/auth/hooks/useProfile";
import { useAuthModal } from "../../features/auth/hooks/useAuthModal";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



export interface IIprotectedRoute {
    children: React.ReactNode;
}

export const ProtectedRoute: FC<IIprotectedRoute> = ({ children }) => {
    const { handleLogin } = useAuthModal()
    const { data: profile, isPending, } = useUserProfile();
    const navigate = useNavigate();



    useEffect(() => {
        if (!isPending && !profile) {
            navigate("/");
            handleLogin();

        }
    }, [profile, handleLogin, isPending, navigate]);

    if (isPending) {
        return null;
    }

    return profile ? children : null
}
