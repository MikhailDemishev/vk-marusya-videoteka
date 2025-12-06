import { type ProfileResponse } from "../auth/profile/profile.schemas";
import { apiRequest } from "../http";
import { type Movie, MovieList } from "../movies/movies.schemas";


export function getFavorites() {
    return apiRequest<Movie[]>({
        schema: MovieList,
        url: 'favorites',

    });
}
export function postFavorite(id: number | string) {
    return apiRequest<ProfileResponse>({
        method: 'POST',
        url: 'favorites',
        data: { id: String(id) }
    })
}


export function deleteFavorite(id: number | string) {
    return apiRequest<ProfileResponse>({
        method: 'DELETE',
        url: `/favorites/${id}`,

    })
}
