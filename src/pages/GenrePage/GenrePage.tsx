import { MovieGrid } from "../../components/Movie/MovieGrid/MovieGrid";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { useParams } from "react-router-dom";
import { useGenrePagination } from "./useGenrePagination";
import type { GenreKey } from "../../features/movies/model/genre.types";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { Button } from "../../components/UI/Button/Button";
import { translate1Genre } from "../../utils/translateGenres";
import "./GenrePage.scss";

export const GenrePage = () => {
    const { genre } = useParams()

    const { loadMore, movies, hasMore, error, isPending } = useGenrePagination(genre as GenreKey)

    return (
        <PageBoundary isLoading={isPending} isError={error}>
            <SectionLayout className="page-section--genres" title={translate1Genre(genre!)}>
                <MovieGrid
                    movies={movies}>
                </MovieGrid>
                {
                    hasMore && (
                        <Button size="m" onClick={loadMore} >Показать еще</Button>
                    )
                }

            </SectionLayout>
        </PageBoundary>
    )
}
