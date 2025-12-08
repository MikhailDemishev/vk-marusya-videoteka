import { apiRequest } from "../http";
import type { GenreKey } from "../../features/movies/model/genre.types";
import { MovieList, MovieSchema, type Movie } from "./movies.schemas";


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

export function getMoviesByTitle(title: string, count = 5) {
    return apiRequest<Movie[]>({
        schema: MovieList,
        url: "/movie",
        params: { title, count }
    })
}
