import { useAppDispatch } from "../../../app/hooks/reduxHooks";
import { useModalOpenClose } from "../../modal/hooks/useModalOpenClose";
import { setAuthModalStatus } from "../model/authModalStatusSlice";
import { useLogout } from "./useLogout";

export const useAuthModal = () => {
    const dispatch = useAppDispatch();
    const { handleOpenModal } = useModalOpenClose();
    const logout = useLogout()
    const handleLogin = () => {
        handleOpenModal("auth")
        dispatch(setAuthModalStatus("login"));
    }
    const handleLogOut = () => logout.mutate();
    return { handleLogin, handleLogOut };
}
