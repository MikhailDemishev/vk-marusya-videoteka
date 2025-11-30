import { MovieBanner } from "../../components/MovieBanner/MovieBanner"
import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid"
import "./HomePage.scss";

export const HomePage = () => {
    const randomMovieQuery = useRandomMovie()
    const topTenQuery = useTopTenMovies()



    return (
        <div className="main-page">
            <MovieBanner
                movie={randomMovieQuery.data ?? null}
                isLoading={randomMovieQuery.isLoading}
                error={randomMovieQuery.error}
                mode="home"
                refetch={randomMovieQuery.refetch}
            ></MovieBanner>
            <section className="main-page__content">
                <h2 className="main-page__title">Топ 10 фильмов</h2>
                <MovieGrid
                    movies={topTenQuery.data ?? []}
                    showIndex
                >
                </MovieGrid>
            </section>

        </div>

    )
}
