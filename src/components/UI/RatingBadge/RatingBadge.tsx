import type { FC } from "react";
import type { Movie } from "../../../api/movies/movies.schemas";
import sprite from '/src/assets/images/sprite/sprite.svg';
import "./RatingBadge.scss";
import { round } from "../../../utils/round";
import { colorByRating } from "../../../utils/colorByRating";
interface IRating {
    movie: Movie
    className: string
}

export const RatingBadge: FC<IRating> = ({
    movie,
    className,
}) => {

    const movieRating = round(movie!.tmdbRating)

    return (
        <div className={`${className}__rating rating rating--${colorByRating(movieRating)}`}>
            <svg className="rating__logo" aria-hidden="true">
                <use
                    href={`${sprite}#star`} xlinkHref={`${sprite}#star`}
                />
            </svg>
            <span className="rating__value">{movieRating}</span>
        </div>
    )
}
