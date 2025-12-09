import "./Modal.scss";
import type { FC, ReactNode } from "react";
import { Button } from "../UI/Button/Button";
import { useModalOpenClose } from "../../features/modal/hooks/useModalOpenClose";

interface IAuthModal {
    children: ReactNode;
}


export const ModalElement: FC<IAuthModal> = ({ children }) => {
    const { handleCloseModal } = useModalOpenClose()
    return (
        <div className="modal__overlay">
            <div className="modal__wrapper">
                <div className="modal">
                    <Button
                        className="modal__close-btn"
                        variant="close"
                        onClick={handleCloseModal}                    >
                    </Button>
                    {children}
                </div>
            </div>
        </div>

    )
}
