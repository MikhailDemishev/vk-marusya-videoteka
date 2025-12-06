import { SectionLayout } from "../../components/layout/PageSection/PageSection";
import { Button } from "../../components/UI/Button/Button";
import { useGenreListPagination } from "./useGenreListPagination";
import { Grid } from "../../components/UI/Grid/Grid";
import { GenreCard } from "../../components/entities/Genre/GenreCard/GenreCard.";
import { PageLayout } from "../../components/layout/PageLayout/PageLayout";
import "./GenresPage.scss";

export const GenresPage = () => {

    const { loadMore, hasMore, items } = useGenreListPagination();

    return (
        <PageLayout pageName="genres">
            <SectionLayout sectionName="genres" title="Жанры фильмов">
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
                        <Button size="m" className="genres-section__btn" onClick={loadMore} >Показать еще</Button>
                    )
                }
            </SectionLayout>
        </PageLayout>
    )
}
