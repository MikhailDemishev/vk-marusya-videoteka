import axios from "axios";
import { z } from "zod";



interface IFetchOptions<T> {
    schema?: z.ZodType<T>;
    method?: "GET" | "POST" | "DELETE";
    url: string;
    data?: unknown;
    params?: Record<string, string | number | undefined>;
}
const api = axios.create({
    baseURL: "https://cinemaguide.skillbox.cc",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 5000,
});



export async function apiRequest<T>({
    schema,
    method = "GET",
    url,
    data,
    params
}: IFetchOptions<T>): Promise<T> {
    const response = await api.request({
        method,
        url,
        data,
        params
    });

    const json = response.data;

    if (schema) {
        return schema.parse(json);
    }

    return json as T;
}
