import type { FC } from "react";
import type { Movie } from "../../../../../api/movies/movies.schemas";
import placeholder from "/src/assets/images/placeholders/clapperboard-placeholder.jpg";
import { Link } from "react-router-dom";


import "./MovieSearchCard.scss";
import { MetaBlock } from "../../../../UI/MetaBlock/MetaBlock";

interface IMovieSearchCard {
    movie: Movie | null
}


export const MovieSearchCard: FC<IMovieSearchCard> = ({ movie }) => {

    return (
        <Link className="moviesearch-card" to={`/movie/${movie!.id}`} preventScrollReset={true}>
            <div className="moviesearch-card-img__wrapper">
                <img className="moviesearch-card__img" src={movie?.backdropUrl ?? placeholder} alt={`Обложка фильма ${movie?.title ?? ""}`} />
            </div>
            <div className="moviesearch-card__inner">
                {movie && (<MetaBlock movie={movie} className="moviesearch-card__rating" />)}
                <div className="moviesearch-card__title">{movie?.title}</div>
            </div>
        </Link>
    )
}
