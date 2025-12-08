import type { FC } from "react";
import type { Movie } from "../../../api/movies/movies.schemas";
import "./MetaBlock.scss";
import { RatingBadge } from "../RatingBadge/RatingBadge";
import { formatMinutes } from "../../../utils/formatMinutes";
import { translatedGenres } from "../../../utils/translateGenres";
interface IMeta {
    movie: Movie
    className: string
}

export const MetaBlock: FC<IMeta> = ({
    movie,
    className
}) => {
    const genresToRender = translatedGenres(movie!.genres)
    return (
        <div className={`${className} meta`}>
            {movie && <RatingBadge movie={movie} className="meta" />}
            <span className="meta__year">{movie!.releaseYear}</span>
            <span className="meta__genre">{genresToRender}</span>
            <span className="meta__duration">{formatMinutes(movie!.runtime)}</span>
        </div>
    )
}
