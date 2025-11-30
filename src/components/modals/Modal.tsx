import "./Modal.scss";
import type { FC, ReactNode } from "react";
import sprite from "/src/assets/images/sprite/sprite.svg";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeModal, selectModalType } from "../../features/modal/modalOpenCloseSlice";
import { Button } from "../UI/Button/Button";
import { setAuthModalStatus } from "../../features/auth/model/authModalStatusSlice";

interface IAuthModal {
    children: ReactNode;
}


export const ModalElement: FC<IAuthModal> = ({ children }) => {
    const dispatch = useAppDispatch();
    const modalType = useAppSelector(selectModalType);
    const handleModalClose = () => {
        dispatch(closeModal());
        if (modalType === "auth") dispatch(setAuthModalStatus("login"));

    }


    return (
        <div className="modal__overlay">
            <div className="modal__wrapper">

                <div className="modal">
                    <Button
                        className="modal__close-btn"
                        variant="close"
                        onClick={handleModalClose}
                    >
                    </Button>
                    <span className="modal__logo">
                        <svg className="modal__logo-image" width="23" height="30" aria-hidden="true">
                            <use href={`${sprite}#marusya-symbol`} xlinkHref={`${sprite}#marusya-symbol`} />
                        </svg>
                        <svg className="modal__logo-text" width="92" height="20" aria-hidden="true">
                            <use href={`${sprite}#marusya-text`} xlinkHref={`${sprite}#marusya-text`} />
                        </svg>
                    </span>
                    {children}
                </div>
            </div>
        </div>

    )
}
