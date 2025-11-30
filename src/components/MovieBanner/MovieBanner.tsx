import { Loader } from "../Loader/Loader";
import type { Movie } from "../../api/movies/movies.schemas";
import { Button } from "../UI/Button/Button";
import type { FC } from "react";
import { formatMinutes } from "../../utils/formatMinutes";
import { round } from "../../utils/round";
import sprite from '/src/assets/images/sprite/sprite.svg';

import "./MovieBanner.scss";


interface IMovieBanner {
    movie: Movie | null
    isLoading: boolean
    error: Error | null
    mode: "home" | "details"
    refetch?: () => void;
}

export const MovieBanner: FC<IMovieBanner> = ({
    movie,
    isLoading,
    error,
    mode,
    refetch,
}) => {

    const testClick = () => {
        console.log('здесь будет позже окно с трейлером');
    }

    if (isLoading) {
        return (<Loader />)
    }

    if (error) {
        return (<div>{error.message}</div>)
    }

    if (movie) {
        return (
            <>
                <div className="movie-banner">
                    <div className="movie-banner__content">
                        <div className="movie-banner__inner">
                            <div className="movie-banner__about">
                                <div className="movie-banner__meta">
                                    <span className="movie-banner__rating movie-banner-rating">
                                        <svg className="movie-banner-rating__logo-image" width="16" height="16" aria-hidden="true">
                                            <use
                                                href={`${sprite}#star`} xlinkHref={`${sprite}#star`}
                                            />
                                        </svg>
                                        <span className="movie-banner-rating__value">{round(movie.tmdbRating)}</span>
                                    </span>
                                    <span className="movie-banner__year">{movie.releaseYear}</span>
                                    <span className="movie-banner__genre">{movie.genres.join(', ')}</span>
                                    <span className="movie-banner__duration">{formatMinutes(movie.runtime)}</span>
                                </div>
                                <h1 className="movie-banner__title">{movie.title}</h1>
                                <p className="movie-banner__description">{movie.plot}</p>

                            </div>
                            <div className="movie-banner__actions">
                                <Button
                                    className="movie-banner__button"
                                    size="m"
                                    onClick={testClick}
                                >Трейлер</Button>
                                <Button
                                    className="movie-banner__button"
                                    size="m">О фильме</Button>
                                {
                                    mode === "home" && (
                                        <>
                                            <Button className="movie-banner__button"
                                                size="s">
                                                <svg className="header__logo-image" width="20" height="19" aria-hidden="true">
                                                    <use href={`${sprite}#heart`} xlinkHref={`${sprite}#heart`} />
                                                </svg>
                                            </Button>
                                            <Button
                                                className="movie-banner__button"
                                                size="s"
                                                onClick={() => refetch?.()}>
                                                <svg className="header__logo-image" width="20" height="20" aria-hidden="true">
                                                    <use href={`${sprite}#refresh`} xlinkHref={`${sprite}#refresh`} />
                                                </svg>
                                            </Button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <img className="movie-banner__image" src={movie.posterUrl || ""} width="680" height="552" alt={movie.title} />
                    </div>
                    {
                        mode === "details" && (

                            <div className="movie-banner__details">А сюда дополнительные данные</div>
                        )
                    }
                </div>
            </>
        )
    }

}
