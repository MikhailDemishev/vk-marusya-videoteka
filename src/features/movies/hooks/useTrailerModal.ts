import { useAppDispatch } from "../../../app/hooks/reduxHooks";
import { useModalOpenClose } from "../../modal/hooks/useModalOpenClose";
import { setTrailerData } from "../model/trailerUrlSlice";

export const useTrailerModal = () => {
    const { handleOpenModal } = useModalOpenClose();
    const dispatch = useAppDispatch();

    const handleTrailerOpen = (trailerUrl: string | null | undefined, trailerDesc: string | null | undefined) => {
        dispatch(setTrailerData({ trailerUrl, trailerDesc }));
        handleOpenModal("trailer")
    }
    return { handleTrailerOpen };
}
