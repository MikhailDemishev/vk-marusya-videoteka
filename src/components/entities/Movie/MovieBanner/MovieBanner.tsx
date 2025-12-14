import type { Movie } from "../../../../api/movies/movies.schemas";
import { Button } from "../../../UI/Button/Button";
import type { FC } from "react";
import sprite from '/src/assets/images/sprite/sprite.svg';
import placeholder from "/src/assets/images/placeholders/clapperboard-placeholder.jpg";
import { Link } from "react-router-dom";
import { useAddToFavorites } from "../../../../features/favorites/hooks/useAddToFavorites";
import { MetaBlock } from "../../../UI/MetaBlock/MetaBlock";
import { useTrailerModal } from "../../../../features/movies/hooks/useTrailerModal";
import "./MovieBanner.scss";


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

    const { handleAddToFavorites, filmInFavorites } = useAddToFavorites()
    const { handleTrailerOpen } = useTrailerModal()

    return (
        <>
            <div className="movie-banner">
                <div className="movie-banner__content">
                    <div className="movie-banner__inner">
                        <div className="movie-banner__about">
                            {movie && (
                                <MetaBlock movie={movie} className="movie-banner__meta" />)}

                            <h2 className="movie-banner__title">{movie!.title}</h2>
                            <p className="movie-banner__description">{movie!.plot}</p>

                        </div>
                        <div className="movie-banner__actions">
                            <Button
                                className="movie-banner__button"
                                size="m"
                                onClick={() => handleTrailerOpen(movie!.trailerUrl, movie!.title)}
                            >Трейлер</Button>
                            {
                                mode === "home" && (
                                    <>
                                        <Link className="btn btn--primary btn--m movie-banner__button" to={`/movie/${movie!.id}`} preventScrollReset={true}>О фильме</Link>
                                    </>
                                )
                            }
                            <Button className={filmInFavorites(movie!.id) ? "movie-banner__button--added" : "movie-banner__button"}
                                size="s"
                                onClick={() => handleAddToFavorites(movie!.id)}>
                                <svg className="movie-banner__logo-image" width="20" height="19" aria-hidden="true">
                                    {
                                        filmInFavorites(movie!.id) ? (
                                            <use href={`${sprite}#heart-filled`} xlinkHref={`${sprite}#heart-filled`} />
                                        ) : (
                                            <use href={`${sprite}#heart-empty`} xlinkHref={`${sprite}#heart-empty`} />
                                        )
                                    }

                                </svg>
                            </Button>
                            {
                                mode === "home" && (
                                    <>
                                        <Button
                                            className="movie-banner__button"
                                            size="s"
                                            onClick={() => refetch?.()}>
                                            <svg className="movie-banner__logo-image" width="20" height="20" aria-hidden="true">
                                                <use href={`${sprite}#refresh`} xlinkHref={`${sprite}#refresh`} />
                                            </svg>
                                        </Button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <img className="movie-banner__image" src={movie!.posterUrl || placeholder} width="680" height="552" alt={movie!.title} />
                </div>
            </div>
        </>
    )


}
