import { openModal, closeModal } from "../model/modalOpenCloseSlice";
import { useAppDispatch } from "../../../app/hooks/reduxHooks";

export const useModalOpenClose = () => {
    const dispatch = useAppDispatch();

    const handleOpenModal = (modalType: string) => dispatch(openModal(modalType));
    const handleCloseModal = () => dispatch(closeModal())
    return { handleOpenModal, handleCloseModal };
}
