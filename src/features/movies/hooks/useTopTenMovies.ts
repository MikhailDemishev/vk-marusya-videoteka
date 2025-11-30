import { useQuery } from "@tanstack/react-query";
import { get10Movies } from "../../../api/movies/movies.api";


export function useTopTenMovies() {
    return useQuery({
        queryFn: () => get10Movies(),
        queryKey: ["movie", "top10"],
        retry: false,

    });

}
