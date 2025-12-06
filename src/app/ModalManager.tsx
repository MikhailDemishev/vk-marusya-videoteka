import { ModalElement } from "../components/modals/Modal"
import { AuthCard } from "../components/entities/Auth/AuthForm/AuthCard"
import { selectIsOpen, selectModalType } from "../features/modal/modalOpenCloseSlice"
import { useAppSelector } from "./hooks/reduxHooks"

export const ModalManager = () => {
    const modalIsOpen = useAppSelector(selectIsOpen)
    const modalType = useAppSelector(selectModalType);
    if (!modalIsOpen) return null

    if (modalType === "auth") {
        return (
            <ModalElement>
                <AuthCard />
            </ModalElement>
        )
    }
}
