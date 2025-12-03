import { MovieBanner } from "../../components/Movie/MovieBanner/MovieBanner"
import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import { Grid } from "../../components/UI/Grid/Grid";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import "./HomePage.scss";
import { MovieCard } from "../../components/Movie/MovieCard/MovieCard";

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
                        <Grid
                            items={topTenQuery.data ?? []}
                            className="movie"
                            renderItem={(item, index) => (
                                <MovieCard
                                    id={item.id}
                                    index={index + 1}
                                    title={item.title}
                                    imageUrl={item.backdropUrl}
                                />
                            )}
                        >
                        </Grid>
                    </SectionLayout>
                </div>
            </PageBoundary>

        </>
    )
}
