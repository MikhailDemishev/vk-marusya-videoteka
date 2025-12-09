import { ModalElement } from "../components/modals/Modal"
import { AuthCard } from "../components/entities/Auth/AuthForm/AuthCard"
import { selectIsOpen, selectModalType } from "../features/modal/model/modalOpenCloseSlice"
import { useAppSelector } from "./hooks/reduxHooks"
import { MovieTrailer } from "../components/entities/Movie/MovieTrailer/MovieTrailer"
import { selectTrailerUrl } from "../features/movies/model/trailerUrlSlice"

export const ModalManager = () => {
    const modalIsOpen = useAppSelector(selectIsOpen)
    const modalType = useAppSelector(selectModalType);
    const trailerUrl = useAppSelector(selectTrailerUrl)
    if (!modalIsOpen) return null

    if (modalType === "auth") {
        return (
            <ModalElement>
                <AuthCard />
            </ModalElement>
        )
    }
    if (modalType === "trailer") {
        return (
            <ModalElement>
                <MovieTrailer trailerUrl={trailerUrl} />
            </ModalElement>
        )
    }

}
