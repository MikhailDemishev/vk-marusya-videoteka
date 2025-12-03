//import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import { GenreGrid } from "../../components/Genre/GenreGrid/GenreGrid";
import "./GenresPage.scss";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { Button } from "../../components/UI/Button/Button";
import { useGenreListPagination } from "./useGenreListPagination";

export const GenresPage = () => {

    const { loadMore, hasMore, items } = useGenreListPagination();


    return (
        <SectionLayout className="page-section--genres-list" title="Жанры фильмов">
            <GenreGrid genres={items} />
            {
                hasMore && (
                    <Button size="m" onClick={loadMore} >Показать еще</Button>
                )
            }
            <Button></Button>
        </SectionLayout>
    )
}
