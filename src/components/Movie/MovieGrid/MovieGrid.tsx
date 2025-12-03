import type { MovieListT } from "../../../api/movies/movies/movies.schemas";
import type { FC } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieGrid.scss";


interface IMovieList {
    movies: MovieListT
    showIndex?: boolean;
    showCloseButton?: boolean;
}

export const MovieGrid: FC<IMovieList> = (
    { movies, showIndex, showCloseButton }
) => {
    console.log(movies);

    return (


        <ul className="movie-grid">
            {movies.map((movie, index) => (
                <li key={movie.id} className="movie-grid__item">
                    <MovieCard
                        id={movie.id}
                        title={movie.title}
                        imageUrl={movie.backdropUrl}
                        index={showIndex ? index + 1 : undefined}
                        showCloseButton={showCloseButton}
                    />
                </li>
            ))
            }
        </ul>
    )
}
