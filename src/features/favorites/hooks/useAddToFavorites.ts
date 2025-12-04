import { useAuthModalActions } from "../../auth/hooks/useAuthModal";
import { useUserProfile } from "../../auth/hooks/useProfile";
import { usePostFavorite } from "./usePostFavorite";

export const useAddToFavorites = () => {
    const { handleOpenAuthModal } = useAuthModalActions();
    const { data: profile } = useUserProfile();
    const postFavorite = usePostFavorite()

    const filmInFavorites = (id: number | string) => {
        return profile?.favorites?.includes(String(id));
    };


    const handleAddToFavorites = (id: number | string) => {
        if (!profile) {
            handleOpenAuthModal();
            return;
        }

        if (!id) {
            console.error("id is missing!");
            return;
        }

        if (filmInFavorites(id)) {
            alert('Фильм добавлен ранее!')
            return
        };
        postFavorite.mutate(id)
    }

    return { handleAddToFavorites, filmInFavorites }


}
