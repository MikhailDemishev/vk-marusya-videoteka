import { MovieBanner } from "../../components/Movie/MovieBanner/MovieBanner"
import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import { MovieGrid } from "../../components/Movie/MovieGrid/MovieGrid"
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import "./HomePage.scss";

export const HomePage = () => {
    const randomMovieQuery = useRandomMovie()
    const topTenQuery = useTopTenMovies()
    return (
        <>
            <PageBoundary
                isLoading={randomMovieQuery.isPending || topTenQuery.isPending}
                isError={randomMovieQuery.error || topTenQuery.error}>
                <div className="main-page">
                    <MovieBanner
                        movie={randomMovieQuery.data ?? null}
                        mode="home"
                        refetch={randomMovieQuery.refetch}
                    ></MovieBanner>
                    <SectionLayout
                        title="Топ 10 фильмов"
                        className="page-section--main">
                        <MovieGrid
                            movies={topTenQuery.data ?? []}
                            showIndex>
                        </MovieGrid>
                    </SectionLayout>
                </div>
            </PageBoundary>

        </>
    )
}
