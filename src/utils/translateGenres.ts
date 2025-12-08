import { genresList } from "./genresList";
export const translatedGenres = (genresToRender: string[]) => {

    const translated = genresToRender
        .map(genre => genresList.find(g => g.key === genre)?.name ?? genre)
        .slice(0, 2);

    if (translated.length === 0) return "";

    return translated.join(", ");
};

export const translate1Genre = (genre: string): string => {
    return genresList.find(g => g.key === genre)?.name ?? genre;
}
