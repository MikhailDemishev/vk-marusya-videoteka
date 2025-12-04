import { useQuery } from "@tanstack/react-query";
import { getFavorites } from "../../../api/favorites/favorites.api";

export function useGetFavorites() {
    return useQuery({
        queryFn: () => getFavorites(),
        queryKey: ["favorites"],
        retry: false,
    });
}
