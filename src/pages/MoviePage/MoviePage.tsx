import { MovieBanner } from "../../components/Movie/MovieBanner/MovieBanner"
import { useMovieById } from "../../features/movies/hooks";
import { PageBoundary } from "../../components/layout/PageBoundary/PageBoundary";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { MovieInfo } from "../../components/Movie/MovieInfo/MovieInfo";
import { useParams } from "react-router-dom";
import "./MoviePage.scss";



export const MoviePage = () => {
    const { id } = useParams<{ id: string }>()
    const movieByIdQuery = useMovieById(id ?? "")
    return (
        <PageBoundary isLoading={movieByIdQuery.isPending} isError={movieByIdQuery.error}>
            <MovieBanner
                movie={movieByIdQuery.data ?? null}
                mode="details"
            ></MovieBanner>
            <SectionLayout
                title="О фильме"
                className="page-section--film-details"
            >
                <MovieInfo movie={movieByIdQuery.data ?? null}></MovieInfo>
            </SectionLayout>

        </PageBoundary>
    )
}
