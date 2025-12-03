import { apiRequest } from "../../http";
import { MovieSchema } from "./movies.schemas";
import { MovieList, type Movie } from "./movies.schemas";
import type { GenreKey } from "../../../features/movies/model/genre.types";


export function getMovieById(id: number | string) {
    return apiRequest<Movie>({
        schema: MovieSchema,
        url: `/movie/${id}`,
    });
}
export function getRandomMovie() {
    return apiRequest<Movie>({
        schema: MovieSchema,
        url: 'movie/random',
    })
}


export function getAllMovies() {
    return apiRequest<Movie[]>({
        schema: MovieList,
        url: 'movie',
    })
}


export function get10Movies() {
    return apiRequest<Movie[]>({
        schema: MovieList,
        url: 'movie/top10',
    })
}


export function getMoviesByGenre(genre: GenreKey, page = 1, count = 15) {
    return apiRequest<Movie[]>({
        schema: MovieList,
        url: "/movie",
        params: { genre, page, count }
    })
}
