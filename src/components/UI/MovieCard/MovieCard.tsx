import type { FC } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/images/placeholders/clapperboard-placeholder.jpg";


import "./MovieCard.scss";


interface IMovieCard {
    id: number;
    index?: number
    title?: string
    imageUrl?: string | null
    showCloseButton?: boolean;
}

export const MovieCard: FC<IMovieCard> = ({ id, index, title, imageUrl, }) => {

    return (
        <Link to={`/movie/${id}`} className="movie-card">
            <img className="movie-card__img" src={imageUrl ?? placeholder} alt={`Обложка фильма ${title ?? ""}`} />
            {
                index !== undefined && (
                    <span className="movie-card__counter">{index}</span>
                )
            }

        </Link>

    )
}
