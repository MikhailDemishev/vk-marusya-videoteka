import type { FC } from "react";
import type { Movie } from "../../../api/movies/movies.schemas";
import sprite from '/src/assets/images/sprite/sprite.svg';
import "./RatingBadge.scss";
import { round } from "../../../utils/round";
interface IRating {
    movie: Movie
    className: string
}

export const RatingBadge: FC<IRating> = ({
    movie,
    className
}) => {

    return (
        <div className={`${className}__rating rating`}>
            <svg className="rating__logo" aria-hidden="true">
                <use
                    href={`${sprite}#star`} xlinkHref={`${sprite}#star`}
                />
            </svg>
            <span className="rating__value">{round(movie!.tmdbRating)}</span>
        </div>
    )
}
