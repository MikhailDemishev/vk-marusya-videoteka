import type { Movie } from "../../../../api/movies/movies.schemas";
import type { FC } from "react";
import { LANGUAGE_CONFIG } from "../../../../features/movies/model/languages.Config";
import { firstLetterTOUpperCase } from "../../../../utils/firstLetterTOUpperCase";
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
        {
            labelName: "Язык оригинала", value:
                firstLetterTOUpperCase(LANGUAGE_CONFIG[movie?.language as keyof typeof LANGUAGE_CONFIG]?.name) ??
                "Язык неизвестен",
        },
        { labelName: "Бюджет", value: movie?.budget ?? 'Бюджет неизвестнен' },
        { labelName: "Выручка", value: movie?.revenue ?? 'Нет данных о выручке' },
        { labelName: "Режиссёр", value: movie?.director ?? 'Неизвестный режиссер' },
        { labelName: "Продакшен", value: movie?.production ?? 'Нет информции о продакшне' },
        { labelName: "Награды", value: movie?.awardsSummary ?? 'Нет информации о наградах' },
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
