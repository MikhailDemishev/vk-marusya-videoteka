import { genresList } from "./genresList";
export const translatedGenres = (genresToRender: string[]) => {
    return (genresToRender
        .map(
            genre => ((genresList.find(g => g.key === genre))?.name)
        ))
        .join(', ')
}

export const translate1Genre = (genre: string): string => {
    return genresList.find(g => g.key === genre)?.name ?? genre;
}
