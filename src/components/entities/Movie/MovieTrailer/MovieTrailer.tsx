
import type { FC } from "react";
import "./MovieTrailer.scss";

interface IMovieTrailer {
    trailerUrl?: string | null | undefined
}



export const MovieTrailer: FC<IMovieTrailer> = ({ trailerUrl }) => {

    return (

        <div>{trailerUrl}</div>
    )


}
