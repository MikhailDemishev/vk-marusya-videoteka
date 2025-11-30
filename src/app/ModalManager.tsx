import { ModalElement } from "../components/modals/Modal"
import { AuthForm } from "../features/auth/ui/AuthForm/AuthCard"
import { selectIsOpen, selectModalType } from "../features/modal/modalOpenCloseSlice"
import { useAppSelector } from "./hooks"

export const ModalManager = () => {
    const modalIsOpen = useAppSelector(selectIsOpen)
    const modalType = useAppSelector(selectModalType);
    if (!modalIsOpen) return null

    if (modalType === "auth") {
        return (
            <ModalElement>
                <AuthForm />
            </ModalElement>
        )
    }
}
