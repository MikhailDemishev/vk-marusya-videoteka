import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../../api/movies/movies.api";


export function useMovieById(id: number | string) {
    return useQuery({
        queryFn: () => getMovieById(id),
        queryKey: ["movie", id],
        enabled: !!id,
        retry: false,
    });
}
