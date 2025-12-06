import { MovieBanner } from "../../components/entities/Movie/MovieBanner/MovieBanner"
import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import { Grid } from "../../components/UI/Grid/Grid";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { MovieCard } from "../../components/entities/Movie/MovieCard/MovieCard";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import "./HomePage.scss";

export const HomePage = () => {
    const randomMovieQuery = useRandomMovie()
    const topTenQuery = useTopTenMovies()
    return (
        <>
            <PageBoundary
                isLoading={randomMovieQuery.isPending || topTenQuery.isPending}
                isError={randomMovieQuery.error || topTenQuery.error}>
                <PageLayout pageName="home">
                    <MovieBanner
                        movie={randomMovieQuery.data ?? null}
                        mode="home"
                        refetch={randomMovieQuery.refetch}
                    ></MovieBanner>
                    <SectionLayout
                        title="Топ 10 фильмов"
                        sectionName="top">
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
                            )}                        >
                        </Grid>
                    </SectionLayout>
                </PageLayout>
            </PageBoundary>
        </>
    )
}
