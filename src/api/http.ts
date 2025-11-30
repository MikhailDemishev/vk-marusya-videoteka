import { z } from "zod";

interface IFetchOptions<T> {
    schema?: z.ZodType<T>;
    method?: "GET" | "POST" | "DELETE";
    extension: string;
    movieId?: number | string;
    body?: unknown;

}
const BASE_URL = 'https://cinemaguide.skillbox.cc';

export async function apiRequest<T>({ schema, method = 'GET', extension, movieId = '', body }: IFetchOptions<T>): Promise<T> {
    const fetchAdress = `${BASE_URL}/${extension}/${movieId}`;
    console.log('fetchAdress', fetchAdress);
    const response = await fetch(fetchAdress, {
        method: method,
        headers: body ? { "Content-Type": "application/json", } : undefined,
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,

    });

    if (!response.ok) {
        throw new Error(await response.text());
    }


    const json = await response.json();
    if (json?.name === "PrismaClientValidationError") {
        throw new Error("Server returned Prisma error");
    }
    console.log("RAW JSON:", json);


    return schema ? schema.parse(json) : json as T;
}
