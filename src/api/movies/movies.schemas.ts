import { z } from "zod";

export const MovieSchema = z.object({
    id: z.coerce.number(),
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.coerce.number(),
    relaseYear: z.coerce.number().optional(),
    releaseDate: z.string(),

    genres: z.array(z.string()),

    plot: z.string(),
    runtime: z.coerce.number(),

    budget: z.string().nullable().optional(),
    revenue: z.string().nullable().optional(),
    homepage: z.string().nullable().optional(),
    status: z.string(),

    posterUrl: z.string().nullable().optional(),
    backdropUrl: z.string().nullable().optional(),

    trailerUrl: z.string().nullable().optional(),
    trailerYoutubeId: z.string().nullable().optional(),

    tmdbRating: z.coerce.number(),

    searchL: z.string(),
    keywords: z.array(z.string()),

    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),

    director: z.string().nullable().optional(),
    production: z.string().nullable().optional(),
    awardsSummary: z.string().nullable().optional(),
});

export type Movie = z.infer<typeof MovieSchema>;



export const MovieList = z.array(MovieSchema)
export type MovieListT = z.infer<typeof MovieList>


export const MovieListSchema = z.object({
    list: MovieList
});

export type MovieListResponse = z.infer<typeof MovieListSchema>;
