import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../main";
import { postFavorite } from "../../../api/favorites/favorites.api";


export function usePostFavorite() {


    const favoritesMutation = useMutation({
        mutationFn: (id: number | string) => postFavorite(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["profile"] });
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error(error.message);
            }
        },
    })


    return favoritesMutation
}
