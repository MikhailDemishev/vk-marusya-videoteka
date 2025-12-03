import type { FC } from "react";
import { Link } from "react-router-dom";

import "./GenreCard.scss";


interface IGenreCard {
    genre: string
    to: string
    imgSource?: string
}

export const GenreCard: FC<IGenreCard> = ({ genre, to, imgSource, }) => {

    return (
        <Link to={to} className="genre-card">
            <img className="genre-card__img" src={imgSource} alt={`Жанр: ${genre}`} />
            <div className="genre-card__inner">
                <span className="genre-card__genre">{genre}</span>
            </div>
        </Link>

    )
}
