import type { Movie } from "../../../api/movies/movies.schemas";
import type { FC } from "react";
import "./MovieInfo.scss";


interface IMovieInfo {
    movie: Movie | null
}

interface InfoItem {
    labelName: string;
    value: string;
}


export const MovieInfo: FC<IMovieInfo> = ({
    movie,
}) => {
    const infoConfig: InfoItem[] = [
        { labelName: "Original language", value: movie?.language ?? 'unknown language' },
        { labelName: "Budget", value: movie?.budget ?? 'unknown budget' },
        { labelName: "Revenue", value: movie?.revenue ?? 'unknown revenue' },
        { labelName: "Director", value: movie?.director ?? 'unknown director' },
        { labelName: "Production", value: movie?.production ?? 'unknown production' },
        { labelName: "awards", value: movie?.awardsSummary ?? 'no info about awards' },
    ];

    return (
        <>
            <div className="movie-info">
                {infoConfig.map(item => (
                    <div key={item.value} className="movie-info__row">
                        <span className="movie-info__label">
                            <span className="movie-info__label-name">{item.labelName}</span>
                            <span className="movie-info__label-line"></span>
                        </span>
                        <span className="movie-info__value">{item.value}</span>
                    </div>
                ))}
            </div>
        </>
    )


}
