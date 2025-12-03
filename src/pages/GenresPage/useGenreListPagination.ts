import { useEffect, useState } from "react";
import { genresList } from "../../utils/genresList";
import type { GenreObject } from "../../features/movies/model/genre.types";

export const useGenreListPagination = () => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState<GenreObject[]>([]);

    const pageSize = 8;


    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const chunk = genresList.slice(start, end)

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(prev => {
            if (page === 1) {
                return chunk;
            }
            return [...prev, ...chunk];
        });



    }, [page]);

    const hasMore = items.length < genresList.length

    const loadMore = () => setPage(prev => prev + 1)


    return { loadMore, hasMore, items }

}
