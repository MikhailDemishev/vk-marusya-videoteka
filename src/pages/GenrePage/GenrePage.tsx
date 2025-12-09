import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { useParams } from "react-router-dom";
import { useGenrePagination } from "./useGenrePagination";
import type { GenreKey } from "../../features/movies/model/genre.types";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { Button } from "../../components/UI/Button/Button";
import { translate1Genre } from "../../utils/translateGenres";
import { Grid } from "../../components/UI/Grid/Grid";
import "./GenrePage.scss";
import { MovieCard } from "../../components/entities/Movie/MovieCard/MovieCard";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";

export const GenrePage = () => {
    const { genre } = useParams()

    const { loadMore, movies, hasMore, error, isPending } = useGenrePagination(genre as GenreKey)

    return (
        <PageBoundary isLoading={isPending} isError={error}>
            <PageLayout pageName="genre">
                <SectionLayout sectionName="genre" title={translate1Genre(genre!)}>
                    <Grid
                        items={movies}
                        className="movie"
                        renderItem={(item) => (
                            <MovieCard
                                id={item.id}
                                title={item.title}
                                imageUrl={item.backdropUrl}
                            />
                        )}
                    >
                    </Grid>
                    {
                        hasMore && (
                            <Button size="m" className="genre-section__btn" onClick={loadMore} >Показать еще</Button>
                        )
                    }

                </SectionLayout>
            </PageLayout>
        </PageBoundary>
    )
}
