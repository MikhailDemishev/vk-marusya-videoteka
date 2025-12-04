import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../main";
import { deleteFavorite } from "../../../api/favorites/favorites.api";


export function useDeleteFavorite() {


    const favoritesMutation = useMutation({
        mutationFn: (id: number | string) => deleteFavorite(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["favorites"] });
        },

        onError: (error: unknown) => {
            if (error instanceof Error) {
                console.error(error.message);
            }
        },
    })


    return favoritesMutation
}
