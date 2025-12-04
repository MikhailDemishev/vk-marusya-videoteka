import { useQuery } from "@tanstack/react-query";
import { getMoviesByGenre } from "../../../api/movies/movies.api";
import type { GenreKey } from "../model/genre.types";


export function useMoviesByGenre(
    genre: GenreKey,
    page: number = 1,
    count: number = 15
) {
    return useQuery({
        queryKey: ["moviesByGenre", genre, page, count],
        queryFn: () => getMoviesByGenre(genre, page, count),
        retry: false,
    });
}
