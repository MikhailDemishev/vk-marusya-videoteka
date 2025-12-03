//import { useTopTenMovies, useRandomMovie } from "../../features/movies/hooks";
import "./GenresPage.scss";
import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { Button } from "../../components/UI/Button/Button";
import { useGenreListPagination } from "./useGenreListPagination";
import { Grid } from "../../components/UI/Grid/Grid";
import { GenreCard } from "../../components/Genre/GenreCard/GenreCard.";

export const GenresPage = () => {

    const { loadMore, hasMore, items } = useGenreListPagination();


    return (
        <SectionLayout className="page-section--genres-list" title="Жанры фильмов">
            <Grid items={items} className="genres"
                renderItem={(item) => (
                    <GenreCard
                        genre={item.name}
                        to={`/genres/${item.key}`}
                        imgSource={item.image}
                    />
                )}
            />
            {
                hasMore && (
                    <Button size="m" onClick={loadMore} >Показать еще</Button>
                )
            }
        </SectionLayout>
    )
}
