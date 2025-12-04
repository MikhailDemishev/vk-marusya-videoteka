import { useQuery } from "@tanstack/react-query";
import { getRandomMovie } from "../../../api/movies/movies.api";

export function useRandomMovie() {
    return useQuery({
        queryFn: () => getRandomMovie(),
        queryKey: ["movie", "random"],
        retry: false,

    });

}
