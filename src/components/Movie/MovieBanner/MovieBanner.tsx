import type { Movie } from "../../../api/movies/movies/movies.schemas";
import { Button } from "../../UI/Button/Button";
import type { FC } from "react";
import { formatMinutes } from "../../../utils/formatMinutes";
import { round } from "../../../utils/round";
import sprite from '/src/assets/images/sprite/sprite.svg';
import { Link } from "react-router-dom";
import "./MovieBanner.scss";
import { translatedGenres } from "../../../utils/translateGenres";


interface IMovieBanner {
    movie: Movie | null
    mode: "home" | "details"
    refetch?: () => void
}

export const MovieBanner: FC<IMovieBanner> = ({
    movie,
    mode,
    refetch,
}) => {

    const testClick = () => {
        console.log('здесь будет позже окно с трейлером');
    }



    const genresToRender = translatedGenres(movie!.genres)
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
                                    <span className="movie-banner-rating__value">{round(movie!.tmdbRating)}</span>
                                </span>
                                <span className="movie-banner__year">{movie!.releaseYear}</span>
                                <span className="movie-banner__genre">{genresToRender}</span>
                                <span className="movie-banner__duration">{formatMinutes(movie!.runtime)}</span>
                            </div>
                            <h1 className="movie-banner__title">{movie!.title}</h1>
                            <p className="movie-banner__description">{movie!.plot}</p>

                        </div>
                        <div className="movie-banner__actions">
                            <Button
                                className="movie-banner__button"
                                size="m"
                                onClick={testClick}
                            >Трейлер</Button>
                            <Button className="movie-banner__button"
                                size="s">
                                <svg className="header__logo-image" width="20" height="19" aria-hidden="true">
                                    <use href={`${sprite}#heart`} xlinkHref={`${sprite}#heart`} />
                                </svg>
                            </Button>
                            {
                                mode === "home" && (
                                    <>
                                        <Link className="btn btn--primary btn--m movie-banner__button" to={`/movie/${movie!.id}`}>О фильме</Link>
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
                    <img className="movie-banner__image" src={movie!.posterUrl || ""} width="680" height="552" alt={movie!.title} />
                </div>
            </div>
        </>
    )


}
