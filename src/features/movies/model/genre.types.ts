import { GENRE_CONFIG } from "./genresConfig";
export type GenreKey = keyof typeof GENRE_CONFIG;



export type GenreObject = {
    key: GenreKey;
    name: string;
    image: string;
}
