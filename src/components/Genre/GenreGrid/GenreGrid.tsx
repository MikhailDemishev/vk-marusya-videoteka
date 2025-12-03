
import type { FC } from "react";
import { GenreCard } from "../GenreCard/GenreCard.";
import type { GenreObject } from "../../../features/movies/model/genre.types";
import "./GenreGrid.scss";


interface IGenresList {
    genres: GenreObject[]
}

export const GenreGrid: FC<IGenresList> = (
    { genres }
) => {
    console.log(genres);
    return (
        <ul className="genres-grid">
            {genres.map((genre, index) => (
                <li key={index} className="genres-grid__item">
                    <GenreCard
                        genre={genre.name}
                        to={`/genres/${genre.key}`}
                        imgSource={genre.image}
                    />
                </li>
            ))
            }
        </ul>
    )
}
