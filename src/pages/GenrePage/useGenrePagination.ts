import { useEffect, useState } from "react";
import { useMoviesByGenre } from "../../features/movies/hooks";
import type { GenreKey } from "../../features/movies/model/genre.types";
import type { Movie } from "../../api/movies/movies/movies.schemas";

export const useGenrePagination = (genre: GenreKey,) => {
    const [page, setPage] = useState(1);
    const [movies, setMovies] = useState<Movie[]>([])
    const { data, isPending, error } = useMoviesByGenre(genre, page)

    const loadMore = () => setPage(prev => prev + 1)
    const hasMore = data ? data.length >= 15 : false;


    useEffect(() => {
        if (!data) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMovies(prev => {
            if (page === 1) {
                return data;
            }
            return [...prev, ...data];
        });
    }, [data, page]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPage(1);
    }, [genre]);

    return { loadMore, page, movies, hasMore, error, isPending }
}
