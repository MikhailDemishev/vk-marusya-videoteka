import type { GenreObject, GenreKey } from "../features/movies/model/genre.types";
import { GENRE_CONFIG } from "../features/movies/model/genresConfig";


export const genresList: GenreObject[] = Object.entries(GENRE_CONFIG).map(
    ([key, value]) => ({
        key: key as GenreKey,
        name: value.name,
        image: value.image
    })
);
