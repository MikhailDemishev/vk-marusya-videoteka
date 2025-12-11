import "./Modal.scss";
import type { FC, ReactNode } from "react";
import { Button } from "../UI/Button/Button";
import { useModalOpenClose } from "../../features/modal/hooks/useModalOpenClose";

interface IModal {
    children: ReactNode;
    classNameMod?: string;
    modalIsOpen: boolean;
}


export const ModalElement: FC<IModal> = ({ children, classNameMod, modalIsOpen }) => {
    const { handleCloseModal } = useModalOpenClose()
    return (
        <div className={
            classNameMod
                ? `modal modal--${classNameMod} ${modalIsOpen ? "modal--open" : "modal--closed"}`
                : `modal ${modalIsOpen ? "modal--open" : "modal--closed"}`
        }>
            <div className="modal__overlay"></div>
            <div className="modal__wrapper">
                <div className="modal__window">
                    {children}
                </div>
                <Button
                    className="modal__close-btn"
                    variant="close"
                    onClick={handleCloseModal}                    >
                </Button>
            </div>
        </div>

    )
}
