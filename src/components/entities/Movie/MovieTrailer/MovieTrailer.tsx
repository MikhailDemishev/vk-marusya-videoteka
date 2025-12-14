
import type { FC } from "react";



import "./MovieTrailer.scss";

interface IMovieTrailer {
    trailerUrl: string | null | undefined
    trailerDesc: string | null | undefined
}



export const MovieTrailer: FC<IMovieTrailer> = ({ trailerUrl, trailerDesc }) => {

    if (trailerUrl) {
        const youtubeId = trailerUrl!.split('v=')[1];
        const embedUrl = `https://www.youtube.com/embed/${youtubeId}?controls=1&modestbranding=1&rel=0&iv_load_policy=3&autohide=1&fs=1&playsinline=1`

        return (
            <div className="movie-trailer">
                <iframe
                    className="movie-trailer__iframe"
                    src={embedUrl}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <div className="movie-trailer__bottom">{trailerDesc}</div>
            </div>
        )
    } else {
        return (
            <p className="movie-trailer__warning">Для этого фильма трейлер недоступен</p >
        )
    }
}
