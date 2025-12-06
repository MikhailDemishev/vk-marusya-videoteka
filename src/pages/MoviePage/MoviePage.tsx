import { MovieBanner } from "../../components/entities/Movie/MovieBanner/MovieBanner"
import { useMovieById } from "../../features/movies/hooks";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { MovieInfo } from "../../components/entities/Movie/MovieInfo/MovieInfo";
import { useParams } from "react-router-dom";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import "./MoviePage.scss";



export const MoviePage = () => {
    const { id } = useParams<{ id: string }>()
    const movieByIdQuery = useMovieById(id ?? "")
    return (
        <PageBoundary isLoading={movieByIdQuery.isPending} isError={movieByIdQuery.error}>
            <PageLayout pageName="movie">
                <MovieBanner
                    movie={movieByIdQuery.data ?? null}
                    mode="details"
                ></MovieBanner>
                <SectionLayout
                    title="О фильме"
                    sectionName="movie-info"
                >
                    <MovieInfo movie={movieByIdQuery.data ?? null}></MovieInfo>
                </SectionLayout>
            </PageLayout>


        </PageBoundary>
    )
}
