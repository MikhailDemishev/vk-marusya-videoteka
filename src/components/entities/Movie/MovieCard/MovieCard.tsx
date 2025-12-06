import type { FC } from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../../assets/images/placeholders/clapperboard-placeholder.jpg";


import "./MovieCard.scss";
import { Button } from "../../../UI/Button/Button";


interface IMovieCard {
    id: number;
    index?: number
    title?: string
    imageUrl?: string | null
    showCloseButton?: boolean;
    onClick?: () => void;
}

export const MovieCard: FC<IMovieCard> = ({ id, index, title, imageUrl, showCloseButton, onClick }) => {

    return (
        <Link to={`/movie/${id}`} className="movie-card" preventScrollReset={true}>
            <img className="movie-card__img" src={imageUrl ?? placeholder} alt={`Обложка фильма ${title ?? ""}`} />
            {
                index !== undefined && (
                    <span className="movie-card__counter">{index}</span>
                )
            }
            {
                showCloseButton && (
                    <Button variant="close"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            e.preventDefault();
                            onClick?.()
                        }} />
                )
            }
        </Link>
    )
}
