import { useQuery } from "@tanstack/react-query";
import { getMoviesByTitle } from "../../../api/movies/movies.api";


export function useMoviesByTitle(
    title: string,
    count: number = 5
) {
    return useQuery({
        queryKey: ["moviesByTitle", title, count],
        queryFn: () => getMoviesByTitle(title, count),
        retry: false,
        placeholderData: (prev) => prev,
    });
}
