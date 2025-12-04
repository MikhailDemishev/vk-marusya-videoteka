import { openModal } from "../../modal/modalOpenCloseSlice";
import { useAppDispatch } from "../../../app/hooks";
import { useLogout } from "./useLogout";

export const useAuthModalActions = () => {
    const dispatch = useAppDispatch();
    const logout = useLogout()

    const handleOpenAuthModal = () => dispatch(openModal("auth"));

    const handleLogOut = () => logout.mutate();
    return { handleOpenAuthModal, handleLogOut };
}
