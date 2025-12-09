import { useAppDispatch } from "../../../app/hooks/reduxHooks";
import { useModalOpenClose } from "../../modal/hooks/useModalOpenClose";
import { setTrailerUrl } from "../model/trailerUrlSlice";

export const useTrailerModal = () => {
    const { handleOpenModal } = useModalOpenClose();
    const dispatch = useAppDispatch();

    const handleTrailerOpen = (trailerUrl: string | null | undefined) => {
        dispatch(setTrailerUrl(trailerUrl));
        handleOpenModal("trailer")
    }
    return { handleTrailerOpen };
}
