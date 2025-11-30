import { apiRequest } from "../http";
import { MovieSchema } from "./movies.schemas";
import { MovieList, type Movie } from "./movies.schemas";


export function getMovieById(id: number | string) {
    return apiRequest<Movie>({
        schema: MovieSchema,
        extension: 'movie',
        movieId: id,
    })
}
export function getRandomMovie() {
    return apiRequest<Movie>({
        schema: MovieSchema,
        extension: 'movie/random',
    })
}


export function getAllMovies() {
    return apiRequest<Movie[]>({
        schema: MovieList,
        extension: 'movie',
    })
}

export function get10Movies() {
    return apiRequest<Movie[]>({
        schema: MovieList,
        extension: 'movie/top10',
    })
}
